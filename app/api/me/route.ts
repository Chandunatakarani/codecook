import ApiResponse from "@/lib/ApiResponse";
import { asyncHandler } from "@/lib/AsyncHandler";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import ApiError from "@/lib/ApiError";

export const GET = asyncHandler(async (request:Request)=>{
    const cookieStore = await cookies()
    const session_token = cookieStore.get("token")
    if(!session_token?.value || !process.env.JWT_TOKEN) throw new ApiError(401 , false , "forbidden")
    const userDetails = await jwt.verify(session_token?.value , process.env.JWT_TOKEN)
    
    return new ApiResponse(true , "fetcing the token" , userDetails)

})