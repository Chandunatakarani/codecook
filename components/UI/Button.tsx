import { cva } from "class-variance-authority";

const button = cva(["font-semibold rounded-md transition-all ease-in"] , {
    variants:{
        intent:{
            primary:"bg-blue-700 text-white "  , 
            secondary:"border-2 text-blue-500  border-blue-500 hover:bg-blue-500 hover:text-white" , 
            disabled:"bg-blue-700/45 text-white"
        } , 
        size:{
            large:"px-4 py-3 text-xl" , 
            small:"px-4 py-1"
        } , 
        disabled:{
            false:null , 

        }
    }
})

type ButtonProps = {
    intent: "primary" | "secondary" , 
    size:"large" | "small" , 
    title:string , 
    onClick?:()=>void , 
    loading?:boolean , 
    disable?:boolean ,
    loadingText?:string , 
    type?:"button" | "submit"
}

function Button({intent, size , title , onClick , loading , disable , loadingText}:ButtonProps){
    return <button className={button({intent:disable||loading ? "disabled":intent , size:size})} onClick={onClick}>
        {loading?<div className="flex items-center gap-3 justify-center">
            <div className="animate-spin border-b-2 border-l-2 rounded-full w-5 h-5 border-white "></div><span>{loadingText ?? 'loading...'}</span></div>:title}
    </button>
}

export default Button