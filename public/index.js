const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

let obj = {};

userCreateForm.addEventListener('submit', function(event) {
event.preventDefault();

obj = {
    name: document.getElementById('name').value,
    email: document.getElementById('mail').value,
    phone: document.getElementById('phone').value,
    nickname: document.getElementById('nickname').value,
}

let jsondata = JSON.stringify(obj);
console.log(obj);
console.log(jsondata);



    // Default options are marked with *
fetch("/api/user/", {
          method: "POST", // *GET, POST, PUT, DELETE, etc
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: jsondata, // body data type must match "Content-Type" header
      })
      .then(response => response.json())
      .then(data => {console.log("success")}) // parses response to JSON
      .catch(error => console.error(`Fetch Error =\n`, error));
    }
)