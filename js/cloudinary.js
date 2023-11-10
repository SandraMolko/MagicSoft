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

  const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: function (e) {
      console.log(e.loaded / e.total)
    }
  })
  console.log(cloudinaryResponse.data)