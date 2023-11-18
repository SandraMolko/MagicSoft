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

  
  const emailLogin = document.getElementById("emailLogin").value;
  const contraseñaLogin = document.getElementById("contraseñaLogin").value;
  
  function validacionLogin(){
  
  let emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
  if(!emailRegEx.test(emailLogin)|| emailLogin.length < 6){
      msj_error="Por favor, verifica tu correo electrónico";
      showErrorMessage(msj_error);
      return false;
  }
  
  /*Especificaciones: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial*/
  let contraseñaRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  if(!contraseñaRegEx.test(contraseñaLogin)){
      msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (#?!@$ %^&*-).";
      showErrorMessage(msj_error);
      return false;
  } return true;
  }
  
  botonLogin.addEventListener("click", function(event){
  event.preventDefault();
  alert.innerHTML = "";
  let isValid = validacionLogin();
  
  
  if (isValid){
  let login = localStorage.getItem("users", JSON.stringify(users));
  for (cont = 0; cont< login.length; cont++) {
    if(login === email.value && contraseña.value) {
     return 
    }  else{ return msj_error
  
    }
  }
  
  function add_login_check()
  {
    if(is_user_logged_in()){
      if(is_page(6005)){
        wp_redirect('mydomain.com');
        exit;
      }
    }
  }
  add_action('wp','add_login_check');
  
  <script>
    location.href ='http://127.0.0.1:5500/MagicSoft/MagicSoft/gestion_servicios.html';
  </script>
  
  
  // redirige a la pagina una vez que se comprube el usuario
  }
  });