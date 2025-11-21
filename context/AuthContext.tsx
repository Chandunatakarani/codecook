import {ReactNode} from 'react'
import axios from 'axios';
import {createContext, SetStateAction, useContext, useState} from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface contextProps{
    userDetails:any ;
    loading:boolean  ;
    setLoading:React.Dispatch<SetStateAction<boolean>> ;
    isAuth:boolean , 
    loginUser:(data:any)=>Promise<void> , 
    registerUser:(data:any)=>Promise<void>
}

const AppDataContext = createContext<contextProps | null>(null)

export const AppContextProvier = ({children}:any)=>{
    const [loading , setLoading] = useState(true)
    const [userDetails , setUserDetails] = useState(null)
    const [isAuth , setIsAuth] = useState(false)

    const router = useRouter()

    // fetch login details 


    //login user
    const loginUser = async (payload: any) => {
        try {
            setLoading(true)
            const response = await axios.post("/api/login", payload)
            const { data: responseData } = response
            console.log("this is from context when we login" , responseData)
            setUserDetails(responseData)
            toast.success(responseData.message)
            setIsAuth(true)
            router.replace("/")
        } catch (error:any) {
            toast.error(error.response.data.message)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    //register user
    const registerUser = async (payload:any)=>{
        try {
            setLoading(true)
            const response = await axios.post("/api/authentication", payload)
            const { data: responseData } = response
            console.log("this is from context when we login" , responseData)
            setUserDetails(responseData.data)
            toast.success(responseData.message)
            setIsAuth(true)
            router.replace("/login")
            
        } catch (error:any) {
            toast.error(error.response.data.message)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    

    return <AppDataContext.Provider value={{loading  , setLoading , loginUser  , isAuth , userDetails , registerUser}}>
        {children}
    </AppDataContext.Provider>
}

export const useAppData = ()=>{
    const context = useContext(AppDataContext)
    if(!context) throw new Error("App context not found")
    return context
}