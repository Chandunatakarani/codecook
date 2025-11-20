import { cva } from "class-variance-authority";

const button = cva(["font-semibold rounded-md"] , {
    variants:{
        intent:{
            primary:"bg-blue-700 text-white "  , 
            secondary:"border-2 text-blue-700 border-blue-700 "
        } , 
        size:{
            large:"px-4 py-2 text-xl" , 
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
    onClick?:()=>void
}

function Button({intent, size , title , onClick}:ButtonProps){
    return <button className={button({intent:intent , size:size})} onClick={onClick}>
        {title}
    </button>
}

export default Button