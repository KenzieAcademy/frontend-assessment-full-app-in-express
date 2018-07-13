const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")


userCreateForm.addEventListener("submit", submitForm);

let user = {

    name: document.getElementById("name").value,
    birthdate: document.getElementById("DOB").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,

}


function submitForm(event) {
    event.preventDefault();

    console.log(user)

    const postMethod = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),

    };


    fetch("/api/user", postMethod)

        .then(async function (response) {
            if (!response.ok) {
                throw await response.json();
            }
            return response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log('Error:', error));
};