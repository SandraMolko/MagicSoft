function Validarcampos(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const empresa= document.getElementById("empresa").value;
    const servicios = document.getElementById("servicios")
    const message = document.getElementById("message").value;
    const msj_error = document.getElementById("msj_error");
    
    msj_error.style.padding = "20px";
    
    var text;
    if(name.length < 10){
      text = "Introduce un nombre válido!";
      msj_error.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Introduce tu número de teléfono";
      msj_error.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Introduce tu correo";
        msj_error.innerHTML = text;
        return false;
    }
    
    if(empresa.length < 3){
        text = "Por favor escribe el nombre de tu empresa";
        msj_error.innerHTML = text;
        return false;
      }
    
      if(servicios.value== "0"){
        text = "Por favor selecciona una opción";
        msj_error.innerHTML = text;
        return false;
      }
      if(message.length <= 10){
        text = "Por favor escribe más de 20 carácteres en tu mensaje";
        msj_error.innerHTML = text;
        return false;
      }
      alert("Información enviada correctamente, pronto nos pondremos en contacto contigo");
      return true;
    }