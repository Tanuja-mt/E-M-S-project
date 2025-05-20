import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    const [taskTile, setTaskTile] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({})
    const submitHandler = (e) => {
        e.prevenDefault()
        setNewTask({ taskTile, taskDescription, taskDate, category, active: false, newTask: true, faildTask: false, completed: false })

        const data = userData.employees
        data.forEach(function (elem) {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskSummary.newTask = elem.taskSummary.newTask + 1
            }
        })

        setUserData(data)
        setTaskTile('')
        setCategory('')
        setAssignTo('')
        setNewTask('')
        setTaskDescription('')

    }
    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)

            }} className='bg-[#1c1c1c] p-5 flex item-start justify-between w-full p-5 gap-10'>
                <div className='w-1/2'>
                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Task Title</h3>
                        <input value={taskTile} onChange={(e) => {
                            setTaskTile(e.target.value)
                        }} className='px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md text-white' type="text" placeholder='Make a Ui Design' />
                    </div>
                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Date</h3>
                        <input
                            type="date"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md text-white"
                            id="task-date"
                            name="taskDate"
                            placeholder="Date" />
                    </div>
                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Assign To</h3>
                        <input value={assignTo} onChange={(e) => {
                            setAssignTo(e.target.value)
                        }} className='px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md text-white' type="text" name="" id="" placeholder='Employee Name' />
                    </div>

                    <div className="mb-2 flex flex-shrink flex-col justify-left">
                        <h3 className="text-white font-semibold text-left">Category</h3>
                        <input value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} className='px-2 bg-transparent w-full border-2 border-gray-500 outline-none rounded-md text-white' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <h3 className="text-white font-semibold text-left">Description</h3>
                    <textarea className='px-2  bg-transparent w-full border-2 border-gray-500 outline-none rounded-md text-white' name="" id=""></textarea>
                    <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white py-1 mt-4 rounded-sm'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask;