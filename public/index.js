const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")



userCreateForm.addEventListener('submit', function(event) {
event.preventDefault();

let obj = {
    name: document.getElementById('name').value,
    email: document.getElementById('mail').value,
    phone: document.getElementById('phone').value,
    nickname: document.getElementById('nickname').value
}
JSON.stringify(obj);
console.log(obj);
})