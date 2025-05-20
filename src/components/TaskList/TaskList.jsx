import React from 'react'
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FaildTask from './FaildTask';
const TaskList = ({data}) => {
  return (
      <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start  gap-5 w-full py-5  mt-10'>
       {data.tasks.map((elem , idx)=>{
        if(elem.active){
            return<AcceptTask key={idx} data={elem}/>
        }
        if(elem.NewTask){
            return<NewTask key={idx} data={elem}/>
        }
        if(elem.completed){
            return<CompleteTask key={idx} data={elem}/>
        }
        if(elem.faild){
            return <FaildTask key={idx} data={elem}/>
        }
       })}
      </div>
  )
}
export default TaskList;