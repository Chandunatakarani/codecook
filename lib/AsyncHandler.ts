import { NextResponse } from "next/server"
import ApiError from "./ApiError"
import ApiResponse from "./ApiResponse"

export const asyncHandler = (handler:Function)=>{
    return async (...args:any[])=>{
        try{
            const result = await handler(...args)
            return NextResponse.json(result)
        }catch(error){
            console.error("Api Error:" , error)

            if(error instanceof ApiError){
                return NextResponse.json(new ApiResponse(false , error.message) , {status:error.status})
            }

            return NextResponse.json(new ApiResponse(false , "Internal server error") , {status:500})
        }
    }
}