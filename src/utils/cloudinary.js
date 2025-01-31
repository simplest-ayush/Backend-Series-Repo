import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'   //fs is file system which is provided by node js

cloudinary.config({
    cloud_name: process.env.COUDINARY_CLOUD_NAME,
    api_key: process.env.COUDINARY_API_KEY,
    api_secret: process.env.COUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        })
        // file has been uploaded successfully
        console.log("File has been uploaded on cloudinary ", response.url);
        return response
    } catch (error) {
        // this will remove the locally saved temporary file as the upload operation got failed
        fs.unlinkSync(localFilePath)
        console.error("ERRR ", error)
        return null
    }
}


export { uploadOnCloudinary }