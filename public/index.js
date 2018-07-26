const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

userCreateSubmitButton.addEventListener("click", submitClick);
let data = {};

function submitClick(event) {
    event.preventDefault();
    data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("password").value,
        firstborn: document.getElementById("firstborn").value,
    };
    fetch('/api/user/', {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        })
        .then(response => response.json())


    // console.log(data);
    // let jsonData = JSON.stringify(data);
    // console.log(jsonData);
};