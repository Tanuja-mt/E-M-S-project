import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className='bg-[#1c1c1c] p-5 flex item-start justify-between w-full p-5 gap-10'>
                <div className='w-1/2'>
                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Task Title</h3>
                        <input className='px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md' type="text" placeholder='Make a Ui Design' />
                    </div>
                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Date</h3>
                        <input className='px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md' type="date" name="" id="" placeholder='Date' />
                    </div>
                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Assign To</h3>
                        <input className='px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md' type="text" name="" id="" placeholder='Employee Name' />
                    </div>

                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Category</h3>
                        <input className='px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className="text-white font-semibold text-left">Description</h3>
                    <textarea className='px-2  bg-transparent w-full border-2 border-gray-500 outline-none rounded-md' name="" id=""></textarea>
                    <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white py-1 mt-4 rounded-sm'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask