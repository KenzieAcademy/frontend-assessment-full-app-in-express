const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button")

userCreateSubmitButton.addEventListener("click", submitFormInfo)

function submitFormInfo(event) {
    event.preventDefault()
    const formElement = event.currentTarget.parentElement
    const User = {
        username: formElement.querySelector('#username').value,
        email: formElement.querySelector('#email').value,
        birthdate: formElement.querySelector('#birthdate').value,
        password: formElement.querySelector('#password').value
    }
    fetch('//localhost:3000/api/users', {
        method: 'POST',
        body: JSON.stringify(User),
        headers: {'Content-type': 'application/json'}
    })
        .then(res => res.json())
        .then(data => console.log(data))
    
}