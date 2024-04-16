// Importing necessary functions and libraries
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Function to save state to localStorage
function setLocalStorageItem(state){
    localStorage.setItem('todos', JSON.stringify(state));
}

// Initial state with default tasks
const initialState = [
    {
        id:nanoid(),
        task:'Bonus : Implemented mark completed task',
        isCompleted:true
    },
    {
        id:nanoid(),
        task:'Bonus : Implemented localstorage to save tasks',
        isCompleted:true
    }
]

// Saving initial state to localStorage
// setLocalStorageItem(initialState);

// Creating a Redux slice for todos
const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{

        // Reducer to add a new todo
        AddTodo : (state,action)=>{
            // console.log(state)

            // Pushing the new todo to state
            state.push(action.payload);

            // Saving updated state to localStorage
            setLocalStorageItem(state)
        },

        // Reducer to get all todos
        GetTodos : (state)=>{
            // Retrieving todos from localStorage if available
            if(JSON.parse(localStorage.getItem('todos'))){
                state = JSON.parse(localStorage.getItem('todos'));
            }
            // console.log(state)
            return state;
        },

        // Reducer to delete a todo
        DeleteTodo : (state,action)=>{
            // Filtering out the deleted todo
            const restTasks = state.filter((task)=> task.id !== action.payload.id);
            
            // Saving updated state to localStorage
            setLocalStorageItem(restTasks);
            return restTasks;
        },

        // Reducer to mark a todo as completed or not
        IsCompleted : (state,action)=>{
            const {checked, id} = action.payload

            // Updating the completion status of the specified todo
            const updatedTasks = state.map((task)=>{
                if(task.id === id){
                    task.isCompleted = checked
                }
                return task;
            })

            // Saving updated state to localStorage
            setLocalStorageItem(updatedTasks);
        }

    }
})

// Exporting action creators from the slice
export const { AddTodo, GetTodos, DeleteTodo, IsCompleted } = todoSlice.actions;

// Exporting the reducer from the slice
export default todoSlice.reducer;