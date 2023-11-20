const $alert_container = document.getElementById("alert-container");
const imgDefault = "./src/upload-image.jpg";
let services = new Array();
let message ;

function taskcompleted (message){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}//taskCompleted

function cleanWarnings(){
    $alert_container.innerHTML = "";
    service_name.style.border="";
    service_description.style.border="";
    btnUploadWidget.style.border="";
}//cleanWarnings

function warningAlert(lblStyled, message){
    lblStyled.style.border="solid thin red";
    let showalert =
        `<div class="alert alert-warning alert-dismissible show" role="alert" id="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="close-warning"></button>
        </div>`;
    $alert_container.insertAdjacentHTML("beforeend",showalert);
    //$alert_container.innerHTML = showalert;
}//warningAlert

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dz4ctdoqw', 
    uploadPreset: 'my-preset'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
        }
    }
);//Cloudinary Widget

btnUploadWidget.addEventListener("click", function(e){
    e.preventDefault();
    myWidget.open();
}, false);//Cloudinary button

function validateService(service_name, service_description, urlImage){
    if (service_name.value.length < 10){
        message = "El nombre debe tener más de 10 caracteres";
        warningAlert(service_name, message);
        return false;
    }   
    if (service_description.value.length < 20){
        message = "La descripción debe tener más de 20 caracteres";
        warningAlert(service_description, message);
        return false;
    }   
    if(urlImage == "" || urlImage == imgDefault)  {   
        message = "Por favor seleccione una imagen";
        warningAlert(btnUploadWidget, message);
        return false;
    }
    return true;
}//validateService

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    cleanWarnings();
    const $service_name = document.getElementById("service_name");
    const $service_description = document.getElementById("service_description");
    const $uploadedimage = document.getElementById("uploadedimage");
    const urlImage = $uploadedimage.getAttribute("src");
    const isValid = validateService($service_name, $service_description, urlImage);
    
    if (isValid){
        let service = `{"nombre": "${$service_name.value}",
            "descripción": "${$service_description.value}",
            "urlImage": "${urlImage}"
            }`; //
        services.push(JSON.parse(service)); 
        localStorage.setItem("services", JSON.stringify(services)); 

        taskcompleted("Servicio registrado correctamente");
        $service_name.value="";
        $service_description.value="";
        $service_name.focus();
        $uploadedimage.src = imgDefault;
    }
});//btnSubmit

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    $alert_container.innerHTML = "";
    service_name.value="";
    service_description.value="";
    service_name.focus();
    service_name.style.border="";
    service_description.style.border="";
    uploadedimage.src = imgDefault;
});//btnClear