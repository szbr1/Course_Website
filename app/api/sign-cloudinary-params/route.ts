import {v2 as cloudinary} from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
    api_key: process.env.CLOUDINARY_CLOUD_KEY,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
})

export const POST = async(req:NextRequest)=>{
 try {
    const body = await req.json();
    const {paramsToSign} = body;
    
    const signature = cloudinary.utils.api_sign_request(
        paramsToSign,
        process.env.CLOUDINARY_CLOUD_SECRET as string
    )

    return NextResponse.json({signature},{status:200})
    
 } catch (error) {
    console.error(error)
    return NextResponse.json({message:"Server Error"},{status:500})
 }
}