const msj_error = document.getElementById("msj_error");
//SEND EMAIL FROM CONTACT FORM

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('4KBe--5Op9om1VvvF');
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let validar = validarCampos();

    if (validar) {

      let form = document.getElementById("contact-form");
      // these IDs from the previous steps
      emailjs.sendForm('service_w2y4zyc', 'contact-template', form)
        .then(function () {
          console.log('SUCCESS!');
          msj_error.style.padding = "0px";
          nombre="";
          telefono="";
          email="";
          empresa="";
          service_value=0;
          mensaje="";
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Información enviada correctamente, pronto nos pondremos en contacto contigo'
          })
        }, function (error) {
          console.log('FAILED...', error);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'error',
            title: 'Problemas al enviar sus datos. Intente de nuevo'
          })
        });
    }
  });
}

  function warningAlert(message){
    //lblStyled.style.border="solid thin red";
    let showalert =
        `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button>
        </div>`;
        msj_error.insertAdjacentHTML("beforeend",showalert);
    //$alert_container.innerHTML = showalert;
  }//warningAlert

function validarCampos() {
  const nombre = document.getElementById("contact_name").value;
  const telefono = document.getElementById("contact_phone").value;
  const email = document.getElementById("contact_email").value;
  const empresa = document.getElementById("contact_company").value;
  const servicios = document.getElementById("contact_service")
  const service_value = servicios.options[servicios.selectedIndex].value;
  const mensaje = document.getElementById("contact_message").value;
  

  //msj_error.style.padding = "20px";


  var text;
  if (nombre.trim().length < 8) {
    text = "Introduce tu nombre";
    warningAlert(text);
    return false;
  }
  if (isNaN(telefono) || telefono.trim().length != 10) {
    text = "Introduce tu número de teléfono";
    warningAlert(text);
    return false;
  }
  if (email.indexOf("@") == -1 || email.trim().length < 6) {
    text = "Introduce tu correo";
    warningAlert(text);
    return false;
  }
  if (empresa.trim().length < 3) {
    text = "Por favor escribe el nombre de tu empresa";
    warningAlert(text);
    return false;
  }
  if (servicios.value == "0") {
    text = "Por favor selecciona una opción";
    warningAlert(text);
    return false;
  }
  if (mensaje.trim().length < 10) {
    text = "Por favor escribe más de 10 caracteres en tu mensaje";
    warningAlert(text);
    return false;
  }
  //alert("Información enviada correctamente, pronto nos pondremos en contacto contigo");
  return true;
}

function limpiar() {
  document.getElementById("contact-form").reset();
  document.getElementById("msj_error").innerHTML = "";
}

//hacer una función que limpie los campos al enviar la información 