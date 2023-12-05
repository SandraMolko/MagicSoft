const storedUsers = JSON.parse(localStorage.getItem("users"));
const userMail = localStorage.getItem("user");
console.log(userMail);

if(storedUsers !== null){
    const user = storedUsers.find((person) => person.email == userMail);
    console.log(user);//
    insertNumServices(user)
} else {
    console.log("No se tienen usuarios en el localStorage");
}

function insertNumServices(user){
    let nameAdmin = document.getElementById("userName")
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    nameAdmin.innerHTML = user['nombre'];
    
    let inputHTMLPhone = `<input class="form-control" type="text" name="phoneInput" id="phoneInput" placeholder="${user['teléfono']}" autocomplete="off" readonly>`
    phone.innerHTML += inputHTMLPhone;
    
    let inputHTMLEmail = `<input class="form-control" type="text" name="emailInput" id="emailInput" placeholder="${user['email']}" autocomplete="off" readonly>`
    email.innerHTML += inputHTMLEmail;
    
    let inputHTMLPass = `<input class="form-control" type="password" name="passInput" id="passInput" placeholder="${user['contraseña']}" autocomplete="off" readonly>`
    pass.innerHTML += inputHTMLPass;
}
