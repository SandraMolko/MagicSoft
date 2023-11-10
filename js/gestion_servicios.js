let btnImageUpload = document.getElementById("exampleInputImg");

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