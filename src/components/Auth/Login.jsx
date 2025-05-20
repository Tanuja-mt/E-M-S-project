import React , {createContext, useState}from 'react';
const Login = ({handleLogin}) => {

// console.log(handleLogin)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail("");
        setPassword("");
    }
  return (
    <>
    <div className='flex h-full item-center justify-center bg-red-600'>
        <div className='border-2 border-emerald-600 rounded-xl'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center p-20'>
                <input required  value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} className='mb-2 py-3 px-5 text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl placeholder:text-gray-400' type="email"  placeholder='Enter Your Password'/>
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} className='mb-2 py-3 px-5 text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl placeholder:text-gray-400' type="password" placeholder='Enter Your Password'/>
                <button className='mt-3 w-full px-5 py-2 text-white outline-none border-2 border-emerald-600 bg-emerald-600 rounded-full text-xl font-bold'>Log in</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login;