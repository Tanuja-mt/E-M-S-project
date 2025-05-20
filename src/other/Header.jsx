import React, {useState} from 'react'
import { setLocalStorage } from '../utils/localStorage'

const Header = (props) => {
  // const [userName, setUserName] = useState('')
  // if(!data){
  //   userName('Admin')

  //   }else{
  //     setUserName(data.firstName)
  //   }
  const logOutUser =()=>{
   localStorage.setItem('loggedInUser','')
   props.changeUser('')
  //  window.location.reload()
  }
  return (
    <header className='flex item-end justify-between'> 
        <h1 className='text-2xl font-semibold text-white'>Hellow <br/>👋 <span className='text-3xl text-white font-semibold'>userName</span>
        </h1>
        <button onClick={logOutUser} className='bg-red-500 py-2 px-3 font-medium text-lg text-white h-fit
         font-semibold rounded-sm'>Log Out</button>
    </header>
  )
}

export default Header;