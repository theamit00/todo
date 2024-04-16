import React, { useEffect } from 'react'
import SingleTodo from './SingleTodo'
import { useSelector, useDispatch } from 'react-redux'
import { GetTodos } from '../slices/todoSlice';
import { nanoid } from 'nanoid';


const Todos = () => {
    // Get the todos state from Redux store using useSelector hook
    //useSelector is a React Redux hook that allows functional components to extract and subscribe 
    // to a specific slice of the Redux store state. It enables components to access and respond to changes 
    // in the Redux state, triggering re-renders when relevant parts of the state update.
    const todos = useSelector((state)=>state.todo); 
    const dispatch = useDispatch();

    // useEffect hook to dispatch GetTodos action when component mounts
    useEffect(()=>{
        dispatch(GetTodos()); // Dispatch GetTodos action to fetch todos from storage
    },[]); // passed empty dependency array so that this will run only for once, as the component mount

    // console.log(todos);
  return (
    <ul className='mt-7' >
        {todos && todos.map((singleTodo)=>{
            return <SingleTodo key={nanoid()} singleTodo={singleTodo} />
        })}
    </ul>
  )
}

export default Todos