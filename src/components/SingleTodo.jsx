import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { DeleteTodo, IsCompleted} from '../slices/todoSlice';

const SingleTodo = ({singleTodo}) => {
    const dispatch = useDispatch();
    const {id, task, isCompleted} = singleTodo;

    // Event handler to delete a task
    const handleDeleteTask = ()=>{
        dispatch(DeleteTodo({id})); // Dispatch the DeleteTodo action with the task ID as payload
        return;
    }

    // Event handler to mark a task as completed or incomplete
    const handleCompleteTask = (e)=>{

        // Dispatch the IsCompleted action with checked status and task ID as payload
        dispatch(IsCompleted({checked : e.target.checked, id}));
        return
    }
    
  return (
    <>
        <li className='flex items-center text-lg mb-3 single-task border-gray-500 rounded-lg' >
        <div className='flex items-center flex-1 pl-3' >
            <input type="checkbox" className='text-2xl cursor-pointer' name="completed" id="completed" onChange={handleCompleteTask} checked={isCompleted} />
            <p className={`pl-5 text-lg flex-2 w-9/12 md:text-base sm:text-xs ${isCompleted ? 'line-through' : null} `}  >{task}</p>
        </div>
            <span className='flex-1flex p-3 justify-center delete' onClick={handleDeleteTask} ><FaTrash className='text-center cursor-pointer trash' /></span>
        </li>
    </>
  )
}

export default SingleTodo