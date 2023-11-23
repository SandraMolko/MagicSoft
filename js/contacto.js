const submit = document.getElementById("submit");
const $alert_container = document.getElementById("alert-container");
const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
let message;

function taskcompleted (stateMail, message){
  Swal.fire({
      position: "top-end",
      icon: stateMail,
      title: message,
      showConfirmButton: false,
      timer: 1500
    });

  contact_name.value="";
  contact_company.value="";
  contact_email.value="";
  contact_phone.value="";
  contact_message.value="";
  service_value="0";
}//taskCompleted

function cleanWarnings(){
  $alert_container.innerHTML = "";
  contact_name.style.border="";
  contact_company.style.border="";
  contact_email.style.border="";
  contact_phone.style.border="";
  contact_message.style.border="";
  contact_service.style.border="";
}//cleanWarnings

function cleanForm(){
  contact_name.style.border="";
  contact_company.style.border="";
  contact_email.style.border="";
  contact_phone.style.border="";
  contact_message.style.border="";
  contact_service.style.border="";
  contact_name.value="";
  contact_company.value="";
  contact_email.value="";
  contact_phone.value="";
  contact_message.value="";
  contact_service.value="";
  contact_company.focus();
}//clean Form

function showErrorMessage (lblError, msj_error){
  lblError.style.border="solid thin red";
  let showAlert = 
    `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
    ${msj_error}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button> </div>`;
    $alert_container.insertAdjacentHTML("beforeend",showAlert)
    $alert_container.focus();
}//showErrorMessage

function validateContact(contact_name, contact_company, contact_email, contact_phone, contact_message, service_value){
  
  if (contact_name.value.trim().length < 10) {
    message = "El nombre del contacto debe tener más de 10 caracteres";
    showErrorMessage(contact_name, message);
    return false;
  }
  if (!phoneRegEx.test(contact_phone.value) || parseInt(contact_phone.value).toString().length != 10) {
    console.log(parseInt(contact_phone.value), parseInt(contact_phone.value).toString(), parseInt(contact_phone.value).toString().length); //
    message = "El formato del teléfono es incorrecto";
    showErrorMessage(contact_phone, message);
    return false;
  } 
  if (!emailRegEx.test(contact_email.value) || contact_email.value.trim().length < 8) {
    message="Por favor, verifica tu correo electrónico. El formato correcto es 'usuario@dominio.com'.";
    showErrorMessage(contact_email, message);
    return false;
  }
  if (contact_company.value.trim().length < 10) {
    message="La Razón Social debe tener más de 10 caracteres";
    showErrorMessage(contact_company, message);
    return false;
  }
  if (service_value == "0") {
    message="Por favor selecciona una opción";
    showErrorMessage(contact_service, message);
    return false;
  }
  if (contact_message.value.trim().length < 20) {
    message="El mensaje debe contener al menos 20 caracteres";
    showErrorMessage(contact_message, message);
    return false;
  }
  return true;
}//validateContact

const serviceID = 'service_w2y4zyc';
const templateID = 'contact-template';

//SEND EMAIL FROM CONTACT FORM


submit.addEventListener('click', function (event) {
    event.preventDefault();
    cleanWarnings();
    const contact_name = document.getElementById("contact_name");
    const contact_company = document.getElementById("contact_company");
    const contact_email = document.getElementById("contact_email");
    const contact_phone = document.getElementById("contact_phone");
    const contact_message = document.getElementById("contact_message");
    const contact_service = document.getElementById("contact_service"); 
    const service_value = contact_service.options[contact_service.selectedIndex].value;
    const service_text = contact_service.options[contact_service.selectedIndex].text;
    
    const isValid = validateContact(contact_name, contact_company, contact_email, contact_phone, contact_message, service_value);


    if (isValid) {
      (function () {
        emailjs.init('4KBe--5Op9om1VvvF');
      })();

      let form = document.getElementById("contact-form");
      emailjs.sendForm(serviceID, templateID, form)
        .then(function () {
          console.log('SUCCESS!');
          taskcompleted( "success", "Cotización enviada correctamente");   
          cleanForm();       
        }, function (error) {
          console.log('FAILED...', error);
          taskcompleted( "error", "Falla en el servidor. Inténtelo de nuevo");          
        });
      }//if is valid 
  });//addEvenListener

  
/* function validarCampos() {
  const nombre = document.getElementById("contact_name").value;
  const telefono = document.getElementById("contact_phone").value;
  const email = document.getElementById("contact_email").value;
  const empresa = document.getElementById("contact_company").value;
  const servicios = document.getElementById("contact_service")
  const service_value = servicios.options[servicios.selectedIndex].value;
  const mensaje = document.getElementById("contact_message").value;
  
  //msj_error.style.padding = "20px";
  var text;
  if (nombre.trim().length < 3) {
    text = "Por favor introduce tu nombre completo";
    warningAlert(text);
    return false;
  }
  if (isNaN(telefono) || telefono.trim().length != 10 || /^(?!.*00)([1-9][0-9]{10})$/.test(telefono)) {
    text = "El formato del teléfono es incorrecto";
    warningAlert(text);
    return false;
  }
  if (email.indexOf("@") == -1 || email.trim().length < 6) {
    text = "Por favor, verifica tu correo electrónico";
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
} */

