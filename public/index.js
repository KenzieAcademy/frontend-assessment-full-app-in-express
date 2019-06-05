const userCreateForm = document.getElementById('user-create-form');
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']");
const userCreateEmail = userCreateForm.querySelector('#email');
const userCreateUsername = userCreateForm.querySelector('#username');
const userCreatePassword = userCreateForm.querySelector('#password');
const userCreateName = userCreateForm.querySelector('#name');
let user;

function User(email, username, password, name) {
  this.email = email;
  this.username = username;
  this.password = password;
  this.name = name;
}

const clickEvent = function(event) {
  event.preventDefault();

  user = new User(
    userCreateEmail.value,
    userCreateUsername.value,
    userCreatePassword.value,
    userCreateName.value
  );

  console.log(user);

  fetch('http://localhost:3000/api/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(async function(response) {
      if (response.ok) {
        return response.json();
      } else throw await response.json();
    })
    .then(data => {
      console.log('Success:', data[data.length - 1].username + ' was added!');
    })
    .catch(error => console.log('Error:', error.message));
};

userCreateSubmitButton.addEventListener('click', clickEvent);
