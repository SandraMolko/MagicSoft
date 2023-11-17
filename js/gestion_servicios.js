let $alert_container = document.getElementById("alert-container");
let $service_name = document.getElementById("service_name");
let $service_description = document.getElementById("service_description");
let btnImageUpload = document.getElementById("Inputimg");
let btnsubmit = document.getElementById("submit");
let btnClear = document.getElementById("btnClear");
let services = new Array();
let infowidget;

//Cloudinary
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dz4ctdoqw', 
    uploadPreset: 'my-preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        infowidget = result.info; //test
        console.log(infowidget);  //test
        return infowidget;  //test
      }
    }
  )
  btnImageUpload.addEventListener("click", function(e){
    e.preventDefault();
    myWidget.open();
}, false);


//Submit Data
btnsubmit.addEventListener("click", function(event){
  event.preventDefault();
  let isValid = true;
  let message = "";
  cleanWarnings();
  
  if ($service_name.value.length < 10){
      console.log("nomb: "+$service_name.value.length);
      message = "El nombre debe tener más de 10 caracteres";
      warningAlert($service_name, message);
      isValid=false;
  }   //$service_name < 10
  if ($service_description.value.length < 20){
      console.log("desc: "+$service_description.value.length);
      message = "La descripción debe tener más de 20 caracteres";
      warningAlert($service_description, message);
      isValid=false;
  }   //$service_description < 20
  if(infowidget == "")  {   
    console.log("btnimg: "+btnImageUpload.value);//test
    console.log("cloudinary: "+infowidget);//test
    message = "Por favor seleccione una imagen";
    warningAlert(btnImageUpload, message);
    return false;
  } 

  if (isValid){
      console.log("nomb: "+$service_name.value.length);
      console.log("desc: "+$service_description.value.length);
      console.log("infowidget: "+infowidget);

      let service = `{"nombre": "${$service_name.value}",
          "descripción": "${$service_description.value}"
      }`;
      services.push(JSON.parse(service)); //Agrega al array services el JSON de service
      localStorage.setItem("services", JSON.stringify(services)); //Agrega al localStorage el array de servicios en String

      taskcompleted("El Servicio ha sido guardado");
      $service_name.value="";
      $service_description.value="";
      $service_name.focus();
  }
});

function taskcompleted (message){
  Swal.fire({
      position: "top-end",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
}

function cleanWarnings(){
  $alert_container.innerHTML = "";
  $service_name.style.border="";
  $service_description.style.border="";
}

function warningAlert(lblStyled, message){

  lblStyled.style.border="solid thin red";

  let showalert =
      `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button>
      </div>`;
  $alert_container.insertAdjacentHTML("beforeend",showalert);
  //$alert_container.innerHTML = showalert;
}

btnClear.addEventListener("click", function(event){
  event.preventDefault();
  $alert_container.innerHTML = "";
  $service_name.value="";
  $service_description.value="";
  $service_name.focus();
  $service_name.style.border="";
  $service_description.style.border="";
});




