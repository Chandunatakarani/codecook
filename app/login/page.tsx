"use client";

import { FormEvent, SetStateAction, useState } from "react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useAppData } from "@/context/AuthContext";

export default function AuthScreen() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="font-extrabold text-blue-600 text-3xl">Codecook</h1>

      <div className="md:w-[400px] w-full px-5 transition-all">
        {mode === "login" ? <LoginForm setMode={setMode} mode={mode} /> : <RegisterForm setMode={setMode} mode={mode} />}
      </div>
    </div>
  );
}

type LoginFormProps = {
    setMode:React.Dispatch<SetStateAction<"login" | "register">> ,
    mode:"login" | "register"
}

function LoginForm({setMode , mode}:LoginFormProps) {
  const [formData , setFormData] = useState({
    username:"" , 
    password:""
  })
  const [loading , setLoading] = useState(false)

  const {loginUser} = useAppData()

 function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(name , value)
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function onSubmitForm(e:FormEvent<HTMLFormElement>){
    e.preventDefault() 
    console.log(formData)
    setLoading(true)
    await loginUser(formData)
    setLoading(false)
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmitForm}>
      <h1 className="font-semibold text-xl text-center">Login as Existing user</h1>
      <Input name="username" type="text" intent="primary" size="large" title="Email or Username" onChange={handleOnChange}/>
      <Input name="password" type="password" intent="primary" size="large" title="Password" onChange={handleOnChange} />

      <div className="flex flex-col mt-2">
        <Button type="button" title="Login" loading={loading} intent="primary" size="large" />
       
             <button className="mt-1 text-blue-500 self-start cursor-pointer text-xs">
          Forgot password?
        </button>
        <button className="mt-3 text-blue-500" onClick={()=>setMode("register")}>
            Create new account?
        </button>
        
       
      </div>
    </form>
  );
}

function RegisterForm({mode , setMode}:LoginFormProps) {

  const [formData , setFormData] = useState({
    fullname:"" , 
    email:"" , 
    company:"" , 
    password:""
  })
  const [loading , setLoading] = useState(false)

  const {registerUser} = useAppData()

 function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(name , value)
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function onSubmitForm(e:FormEvent<HTMLFormElement>){
    e.preventDefault() 
    console.log(formData)
    setLoading(true)
    await registerUser(formData)
    setMode("login")
    setLoading(false)
  }
  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmitForm}>
      <h1 className="font-semibold text-2xl text-center">Create Account</h1>

      <Input name="fullname" type="text" intent="primary" size="large" title="Full Name" onChange={handleOnChange} />
      <Input name="email" type="email" intent="primary" size="large" title="Email Address" onChange={handleOnChange} />
      <Input name="company" type="text" intent="primary" size="large" title="College/company" onChange={handleOnChange} />
      <Input name="password" type="password" intent="primary" size="large" title="Password" onChange={handleOnChange} />

      <Button type="submit" loading={loading} title="Register" intent="primary" size="large" />
      <button type="button" className=" text-blue-500" onClick={()=>setMode("login")}>
            Login as existing user ?
        </button>
        
    </form>
  );
}
