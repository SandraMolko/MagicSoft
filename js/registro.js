const signupAlert = document.getElementById("signup-alert-container");
const loginAlert = document.getElementById("login-alert-container");
let msj_error;

const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const passRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
/*Especificaciones: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial*/

function showErrorMessage (signAlert, lblError, msj_error){
  lblError.style.border="solid thin red";
  let showAlert = 
    `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
    ${msj_error}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button> </div>`;
    signAlert.insertAdjacentHTML("beforeend",showAlert);
    signAlert.focus();
}//showErrorMessage

function cleanSignupWarnings(){
  signupAlert.innerHTML = "";
  nombre.style.border="";
  telefono.style.border="";
  email.style.border="";
  contraseña.style.border="";
  contraseñaconf.style.border="";
}//cleanSignupWarnings

function cleanSignUpForm(){
  nombre.value="";
  telefono.value="";
  email.value="";
  contraseña.value="";
  contraseñaconf.value="";
  nombre.style.border="";
  telefono.style.border="";
  email.style.border="";
  contraseña.style.border="";
  contraseñaconf.style.border="";
  nombre.focus();
}//cleanSignUpForm

function taskcompleted (message){
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
}//task completed

function validateSignup(name,phone,email,pass,repPw) {  
  if (name.value.trim().length < 7) {
      msj_error = "Por favor escribe tu nombre completo";
      showErrorMessage(signupAlert, name, msj_error);
      return false;
  }
  if(!phoneRegEx.test(phone.value) || parseInt(phone.value).toString().length != 10){  
      msj_error="El formato del teléfono es incorrecto";
      showErrorMessage(signupAlert, phone, msj_error);
      return false;
  }
  if(!emailRegEx.test(email.value) || email.value.trim().length < 8){
      msj_error="Por favor, verifica tu correo electrónico";
      showErrorMessage(signupAlert, email, msj_error);
      return false;
  }
  if(!passRegEx.test(pass.value)){
      msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (#?!@$ %^&*-).";
      showErrorMessage(signupAlert, pass, msj_error);
      return false;
  }
  if (repPw.value.trim() !== pass.value.trim()) {
    msj_error = "Verifica tu contraseña";
    showErrorMessage(signupAlert, repPw, msj_error);
    return false;
  } 
  return true;
}//validateSignup

const users = new Array(); 
boton.addEventListener("click", function(event){
  event.preventDefault();
  cleanSignupWarnings();
  let $name = document.getElementById("nombre");
  let $phone = document.getElementById("telefono");
  let $email = document.getElementById("email");
  let $pass = document.getElementById("contraseña");
  let $repPw = document.getElementById("contraseñaconf");
  const isValid = validateSignup($name,$phone,$email,$pass,$repPw);

  if (isValid){
    let newUser = `{"nombre": "${$name.value}","teléfono": "${$phone.value}",
      "email": "${$email.value}", "contraseña": "${$pass.value}"}`;
    users.push(JSON.parse(newUser));
    localStorage.setItem("users", JSON.stringify(users));

    taskcompleted("Usuario registrado correctamente");
    cleanSignUpForm();
  }//isValid
});//btnSignup