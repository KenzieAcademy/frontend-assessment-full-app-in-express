const userCreateForm = document.getElementById("user-create-form")
const userName = document.getElementById("username")
const userEmail = document.getElementById("email")
const favPokemon = document.getElementById("pokemon")
const friendID = document.getElementById("friend")
const password = document.getElementById("password")
const phoneNumber = document.getElementById("tel")
const facebookURL = document.getElementById("facebook_URL")
const phonePreferred = document.getElementById("buttonphone")
const textPreferred = document.getElementById("buttontext")
const emailPreferred = document.getElementById("buttonemail")
const android = document.getElementById("android")
const iphone = document.getElementById("iphone")
const user = document.getElementById("user")
const administrator = document.getElementById("administrator")
const moderator = document.getElementById("moderator")


//Button Click Function
function placeFormInfoIntoObject(event) {
    event.preventDefault()

    const userInfo = JSON.stringify({
        userName: userName.value,
        password: password.value,
        userEmail: userEmail.value,
        favoritePokemon: favPokemon.value,
        pokemonFriendID: friendID.value,
        phoneNumber: phoneNumber.value,
        facebookURL: facebookURL.value,
        
        contactPreference :
            phonePreferred.checked
                ? "phone" 
            : textPreferred.checked
                ? "text" 
            : emailPreferred.checked
                ? "email" 
            : "email",

        devices: {
            iphone: Boolean(iphone.checked),
            android: Boolean(android.checked),
        },
        
    })


    fetch("./api/user/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userInfo,
        })
        .then(async response => {
            if (response.status !== 201) {
                throw await response.json()
            }
            let footer = document.getElementById("footer")
            footer.textContent = ""
            return response.json()
        })
        .then(data => console.log(data))
        .catch(error => {
            console.log("ERRORRRR", error)
            footer.textContent = "ERROR " + error.message + ", please choose another username"
        })

}

//Adding click to button
userCreateForm.addEventListener("submit", placeFormInfoIntoObject)