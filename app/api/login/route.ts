"use server"

import ApiError from "@/lib/ApiError";
import { asyncHandler } from "@/lib/AsyncHandler";
import connectDb from "@/lib/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import ApiResponse from "@/lib/ApiResponse";
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";

export const POST = asyncHandler(async (request: Request) => {
    await connectDb()
    const { email, username, password } = await request.json()
    console.log(username)
    if (!username || !password) throw new ApiError(401, false, "Username or Password required")
    const findUser = await Users.findOne({
         userName: username
    })

    if(!findUser) throw new ApiError(404 , false , "User not found")
    const verifyPassword = await bcrypt.compare(password , findUser.password)
    if(verifyPassword){
        if(!process.env.JWT_TOKEN) throw new ApiError(401 , false , "Secrete key not found")
        const token = await jwt.sign({username:findUser.userName , email:findUser.email , userId:findUser._id} ,  process.env.JWT_TOKEN )
        console.log("the token is generated"  , token)
        const cookieStore = await cookies()
        cookieStore.set("token" , token)
        return new ApiResponse(true , "User Verified..", {user:findUser , token})
    }
})