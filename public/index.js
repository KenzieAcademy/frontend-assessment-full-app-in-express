const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")
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

let userInfo = {
    devices: []
}

//Button Click Function
function placeFormInfoIntoObject() {
    event.preventDefault()
    userInfo.userName = userName.value
    userInfo.password = password.value
    userInfo.userEmail = userEmail.value
    userInfo.favoritePokemon = favPokemon.value
    userInfo.pokemonFriendID = friendID.value
    userInfo.phoneNumber = phoneNumber.value
    userInfo.facebookURL = facebookURL.value
    if(phonePreferred.checked){ userInfo.contactPreference = 'phone' }
    if(textPreferred.checked){ userInfo.contactPreference = 'text' }
    if(emailPreferred.checked){ userInfo.contactPreference = 'email' }
    if(iphone.checked){ userInfo.devices.push("iphone") }
    else if(android.checked){ userInfo.devices.push("android") }
    else if(iphone.checked && android.checked){ userInfo.devices = "iphone" + "android" }
    stringifiedUserInfo = JSON.stringify(userInfo)

    fetch("./api/user/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringifiedUserInfo,
        })
        .then(async response => {
            if(response.status !== 201){
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
    userCreateSubmitButton.addEventListener("click", placeFormInfoIntoObject)