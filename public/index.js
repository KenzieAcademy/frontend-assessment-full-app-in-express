const userCreateForm = document.getElementById("user-create-form");
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']");

const userNameInput = document.getElementById("username");
const emailInput = document.getElementById("email-input");
const favQuotInput = document.getElementById("fav-quot");

let User = {};

createNewUser = function(event) {
    event.preventDefault();

    User[`${userNameInput.name}`] = `${userNameInput.value}`;
    User[`${emailInput.name}`] = `${emailInput.value}`;
    User[`${favQuotInput.name}`] = `${favQuotInput.value}`;

    // console.log(JSON.stringify(User))

    fetchUser();
}

function fetchUser() {
    fetch("/api/user/", {

        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(User)

    })
        .then(response => response.json())
        .then(data => {
            const allUsersDiv = document.createElement("div");
            const newUserDiv = document.createElement("div");

            data.forEach(newUser => {
                console.log(newUser);

                newUserDiv.classList.add("new-user-wrap");
            
                const usernameDiv = document.createElement("div");
                usernameDiv.innerHTML = `Username: ${newUser.username}`;
                newUserDiv.appendChild(usernameDiv);

                const emailDiv = document.createElement("div");
                emailDiv.innerHTML = `Email: ${newUser.email}`;
                newUserDiv.appendChild(emailDiv);

                const quoteDiv = document.createElement("div");
                quoteDiv.innerHTML = `Favorite Quote: ${newUser.quote}`
                newUserDiv.appendChild(quoteDiv);

                document.getElementById("all-users-div").appendChild(newUserDiv);
            });
        })
        .catch((err) => {
            document.getElementById("all-users-div").innerHTML = "Username already taken.";
        })
    }
    
    userCreateSubmitButton.addEventListener("click", createNewUser)