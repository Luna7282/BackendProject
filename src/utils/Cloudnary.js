import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"          
cloudinary.config({ 
  cloud_name: process.env.CLOUDNIARY_CLOUD_NAME,
  api_key: process.env.CLOUDNIARY_API_KEY, 
  api_secret: process.env.CLOUDNIARY_API_SECRET,
});

const uploadOncloudnairy= async (localfilepath)=>{
    try{
      if (!localfilepath) 
         return null
        // uploading file on cloudnairy
        const response = await cloudinary.uploader.upload(localfilepath,{
         resource_type:'auto',
         })
      // file has been uploaded succes fully
      console.log("File is uploaded in cloudnairy",
      response.url); // user returning..
      return  response
    }
    catch(error){
         fs.unlinkSync(localfilepath)
         return null;
    }
}
 export {uploadOncloudnairy}