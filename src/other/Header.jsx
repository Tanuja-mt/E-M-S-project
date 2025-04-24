import React from 'react'

const Header = () => {
  return (
    <div className='flex item-end justify-between'> 
        <h1 className='text-2xl font-semibold'>Hellow <br/>👋, <span className='text-3xl font-semibold'>Tanuja</span>
        </h1>
        <button className='bg-red-500 py-2 px-3 font-medium text-lg text-white h-fit
         font-semibold rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header