import React, { useState } from 'react'

function Todo() {
    // let value = "";
    // let todos = ["Todo 1", "Todo 2", "Todo 3"];
    
    let [value, setValue] = useState("")
    let [todos, setTodos] = useState(["Todo 1", "Todo 2", "Todo 3"])

    function printValue(e) {
        console.log(e.target);
        // console.log(e.currentTarget.trim);
        // value = e.target.value;
        setValue(e.target.value)
    }

    function addTodo(e) {
        e.preventDefault();
        // todos.push(value)
        if (!value.trim()) {
            return;
        }
        setTodos((prev) => [...prev, value])
        setValue("")
    }

    return (
        <div>
            <h1>Todo</h1>
            <form onSubmit={addTodo}>
                <input value={value} type="text" onChange={printValue} />
                <button>Add</button>
            </form>

            <ul>
                {todos.map((todo) => <li>{todo}</li>)}
            </ul>
        </div>
    )
}

export default Todo