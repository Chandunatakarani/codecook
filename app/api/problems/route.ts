import connectDb from "@/lib/mongodb";
import Problem from "@/models/problems";
import { NextResponse } from "next/server";



export async function GET(request:Request){
    await connectDb()
     const {searchParams}=new URL(request.url)
    const type=searchParams.get("type")
    const query:any={}
    if(type){
        query.slug=type
    }  
    const problems=await Problem.find(query)
   if(!problems) return NextResponse.json({msg:'no problems found'})
    return NextResponse.json({msg:'problems found ',data:problems})
}

export async function POST(request:Request){

    await connectDb()
    const reqbody=await request.json()
    const problems=await Problem.insertMany(reqbody)
    if(!problems) return  NextResponse.json({msg:'unable to post the data'})
        return NextResponse.json({msg:'problems created successfully'})

}