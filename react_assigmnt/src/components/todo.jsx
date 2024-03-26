import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    console.log(todo, "todo")
    console.log(todos, "todos")

    function HandleChange(event) {
        setTodo(event.target.value)
    }


    function HandleSubmit() {
        setTodos([...todos, todo])
        setTodo("")
    }
    //const deletetodo = e => {
        //updateList(list.slice(list.indexOf(e.target.name, 1)))
   // }
   const deleteByValue = value => {
    setTodos(todo => {
      return todo.filter(i => i !== value)
    })
  }

    return (
        <div>
            <h3>Add Todo</h3>
            <input value={todo} onChange={HandleChange} type='text' placeholder='Write Here..' />
            <button onClick={HandleSubmit}>Submit</button>
            {todos.length ? <div>
                <h2>Your Todos :</h2>
                {todos.map((todo, i) => (
                    <p>{i + 1}. {todo}&nbsp;{<button onClick={() => deleteByValue(todo)}>Delete</button>}</p>
  
                ))}
            </div> : <h1>No todos found.</h1>}
        </div>
    )
}

export default Todo