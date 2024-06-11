import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  // fetch('http://localhost:3000/todos')
  //   .then(async (res)=>{
  //     const json = await res.json()
  //     setTodos(json.todos)
  //   })

  // this basically re render itself which creates a problem
  // fetching in here is really a bad practice we should render there where 
  //  it is required but that one is slightly diificult so we will use this one 

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos props={todos}></Todos>
    </div>
  ) 
}

export default App
