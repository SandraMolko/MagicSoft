const alert = document.getElementById("alert-container");

function validarCampos() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    const contraseñaconf = document.getElementById("contraseñaconf").value;
    
    let msj_error;
    if (nombre.length < 7) {
      msj_error = "Por favor escribe tu nombre completo";
      showErrorMessage(msj_error);
      return false;
    }
    
    let telefonoRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    if(!telefonoRegEx.test(telefono) ){
      console.log(telefonoRegEx.test(telefono));
        msj_error="El formato del teléfono es incorrecto";
        showErrorMessage(msj_error);
        return false;
    }

    let emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    if(!emailRegEx.test(email)|| email.length < 6){
        msj_error="Por favor, verifica tu correo electrónico";
        showErrorMessage(msj_error);
        return false;
    }

    /*Especificaciones: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial*/
    let contraseñaRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    if(!contraseñaRegEx.test(contraseña)){
        msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (#?!@$ %^&*-).";
        showErrorMessage(msj_error);
        return false;
    }
    if (contraseñaconf.value !== contraseña.value) {
      msj_error = "Verifica tu contraseña";
      showErrorMessage(msj_error);
      return false;
    } return true
  }

  function showErrorMessage (msj_error){
    let mostrarAlerta = `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
      ${msj_error}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button>
      </div>`;
    
    alert.insertAdjacentHTML("beforeend",mostrarAlerta)
  }

  function taskcompleted (message){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}

  const users = new Array(); 
  boton.addEventListener("click", function(event){
    event.preventDefault();
    alert.innerHTML = "";
    let isValid = validarCampos();

    if (isValid){
        let registro = `{"nombre": "${nombre.value}",
        "teléfono": "${telefono.value}","email": "${email.value}", "contraseña": "${contraseña.value}"
    }`;
    users.push(JSON.parse(registro)); //Agrega el array al JSON
    localStorage.setItem("users", JSON.stringify(users));

    taskcompleted("El registro se ha hecho correctamente");
    nombre.value="";
    telefono.value="";
    email.value="";
    contraseña.value="";
    contraseñaconf.value="";
    nombre.focus();
    }
  });

  
  //const emailLogin = document.getElementById("emailLogin").value;
  //const contraseñaLogin = document.getElementById("contraseñaLogin").value;
  
  function validacionLogin(email,contraseña){
  
  let emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  if(!emailRegEx.test(email)|| email.length < 6){
      msj_error="Por favor, verifica tu correo electrónico";
      showErrorMessage(msj_error);
      return false;
  }
  
  /*Especificaciones: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial*/
  let contraseñaRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  if(!contraseñaRegEx.test(contraseña)){
      msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (#?!@$ %^&*-).";
      showErrorMessage(msj_error);
      return false;
  } return true;
  }
  
  botonLogin.addEventListener("click", function(event){
  event.preventDefault();
  alert.innerHTML = "";
  let email= document.getElementById("emailLogin").value;
  let contraseña=document.getElementById("contraseñaLogin").value;
  console.log(email, contraseña)
  let isValid = validacionLogin(email, contraseña);
  
  
  if (isValid){
  let login = localStorage.getItem("users");
  login = JSON.parse(login);
  for (cont = 0; cont< login.length; cont++) {
    let userJson = login[cont].email;
    let passwordJson = login[cont].contraseña;
    if(email === userJson && contraseña===passwordJson) {
      
      localStorage.setItem("email", email);
      localStorage.setItem("password", contraseña);
     location.href ="./gestion_servicios.html"; 
    }  else{ 
      msj_error="Error en el usuario o contraseña, favor de verificar";
      showErrorMessage(msj_error);
    }
  }
  
  
  
  // redirige a la pagina una vez que se comprube el usuario
  }
  });

  
  //Función que muestra/oculta la contraseña del usuario 
  
  const pasw = document.getElementById("contraseña");
  icon= document.querySelector(".bx");

  icon.addEventListener("click", function () {
    if (pasw.type === "password") {
      pasw.type = "text";
    } else {
      pasw.type = "password";
    }
  })