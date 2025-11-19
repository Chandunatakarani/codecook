import connectDb from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDb();
    return NextResponse.json({msg:"it is workign"})
}

export async function POST(request:Request){
    const reqBody=await request.json();
    await connectDb();
    return NextResponse.json({msg:"Post request is working",data:reqBody})
}