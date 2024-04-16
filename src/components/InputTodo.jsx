import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { AddTodo } from '../slices/todoSlice';

const InputTodo = () => {

    // Local state to manage the input task and its value
    const [task, setTask] = useState('');
    const dispatch = useDispatch(); // useDispatch() is a hook provided by React Redux that allows functional components to dispatch actions to the Redux store.

     // Event handler to update the task state when typing
    const handleInputTask = (e)=>{
        setTask(e.target.value);
    }

    // Event handler to add a task when the Enter key is pressed
    const handleAddTaskOnEnterKey = (e)=>{
        if(e.keyCode === 13 && task){
            const todo = {
                id : nanoid(),
                task,
                isCompleted : false,
            }

            // e.target.blur();
    
            dispatch(AddTodo(todo)); // Dispatch the AddTodo action with the new task object
            setTask('');
            return;
        }
    }

    // Event handler to add a task when the "Add task" button is clicked
    const handleAddTask = ()=>{
        if(task){
            const todo = {
                id : nanoid(),
                task,
                isCompleted : false,
            }
            dispatch(AddTodo(todo));
            setTask('');
            return;
        }

    }

  return (
    <div className='w-full flex flex-col items-center'>
        <input type="text" className='w-full p-3 border-2 border-t-0 border-x-0 border-gray-700 rounded-xl mb-3 md:text-base sm:text-xs' placeholder='Enter your task' value={task} onChange={handleInputTask} onKeyDown={handleAddTaskOnEnterKey} required />
        <button className='btn text-center border-2 py-3 rounded-xl sm:px-7 px-5 text-base bg-green-400 shadow-md text-slate-50 md:text-base sm:text-xs' onClick={handleAddTask}  >Add task</button>
    </div>
  )
}

export default InputTodo