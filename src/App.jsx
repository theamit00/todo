import React from 'react'
import InputTodo from './components/InputTodo'
import Todos from './components/Todos'

const App = () => {

  return (
    <>
      <h1 className='sm:text-5xl text-3xl  text-center sm:mt-20 mt-10' >TODO</h1>
      <div className='w-10/12 lg:w-6/12 md:w-8/12 sm:w-10/12 m-auto sm:mt-20 mt-8 p-7 border-2 border-gray-500 rounded-xl shadow-lg'>
      <InputTodo />
      <Todos />
    </div>
    </>
  )
}

export default App