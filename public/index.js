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
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        // .then(responseObject => responseObject)
        .then(function(response) {
            console.log(response);
            if ( response.status === 409 ) {
                throw Error(response.statusText);
            }else if(response.status === 201 ){

                return response;
            }
        }).then(function(response) {
            alert("Username successfully created");
        }).catch(function(error) {
            alert("Username Already Taken");
        });
        // .then(hydratedBody => console.log(hydratedBody))

};

