import connectDb from "@/lib/mongodb";
import Course from "@/models/courses";
import { NextResponse } from "next/server";



export async function GET(){
    await connectDb();
     const data =await Course.find({})
    return NextResponse.json({msg:"it is workign",data})
}

export async function POST(request:Request){
    try{
        
    const reqBody=await request.json();
    await connectDb();
    if(Array.isArray(reqBody)){
    const datas = await Course.insertMany(reqBody)
    }
    else{
        const datas=await Course.create(reqBody)
    }
    console.log('the data has been stored successfully');  
    return NextResponse.json({msg:"Post request is working",data:reqBody})
    }
        catch(e){
            console.log('this is the reason',e);
            
        }

}