let btnImageUpload = document.getElementById("Inputimg");

//Cloudinary
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dz4ctdoqw', 
    uploadPreset: 'my-preset'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  btnImageUpload.addEventListener("click", function(e){
    e.preventDefault();
    myWidget.open();
}, false);

//validacin campo vacio 

function empty(){
  let Inputfile = document.getElementById('Inputimg');
   
 if(Inputimg.value == "")  {
   
    alert('Por favor selecciona una imagen');
   return false;
   }
} //vacío

