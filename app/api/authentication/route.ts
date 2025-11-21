import ApiError from "@/lib/ApiError";
import ApiResponse from "@/lib/ApiResponse";
import { asyncHandler } from "@/lib/AsyncHandler";
import connectDb from "@/lib/mongodb";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export const POST = asyncHandler(async (request: Request) => {
    await connectDb()
    const { fullname, email, company, password } = await request.json()
    if (!fullname || !email || !company || !password) throw new ApiError(400, false, "All field are mandatory")
    const findUser = await Users.findOne({
        $or: [
            { email }, { username: fullname }
        ]
    })


    const hashPassword = await bcrypt.hash(password , 10)
    console.log("this is hashing" , hashPassword)
    console.log("this is user find" , findUser)
    if (findUser) throw new ApiError(401, false, "User already exists")
    const newUser = await Users.create({
        userName:fullname , 
        email , 
        company , 
        password:hashPassword
})
    return new ApiResponse(true , "User Created successfully" , newUser)
})

