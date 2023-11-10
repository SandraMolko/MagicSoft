import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({cloud: {cloudName: 'dopadpbzu'}});

const api_key = "495347973491413"

// type="text/javascript">  
 myWidget = Cloudinary.createUploadWidget({
  cloudName: 'dopadpbzu', 
  uploadPreset: 'my_preset'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
}
 )

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);
