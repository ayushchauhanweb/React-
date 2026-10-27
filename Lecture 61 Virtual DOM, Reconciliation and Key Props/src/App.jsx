import { useState } from 'react'
import './App.css'
import Key from './components/Key'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Incriment</button>
    </div>
  )
}

function App() {
  const [changeTag, setChangeTag] = useState(true)

  return (
    <div>

      {/* <p>hello</p>
      <p>hii</p> */}

      {/* {changeTag ? (
        <div>
          <p>div tag</p>
          <Counter />
        </div>
      ) : (
        <section>
          <p>Section tag</p>
          <Counter />
        </section>
      )} */}

      {/* <div className={changeTag ? "active" : "inactive"}>
        <p>div tag</p>
        <Counter />
      </div> */}

      {/* {changeTag ? <Counter /> : <Counter />}

      <button onClick={() => setChangeTag((prev) => !prev)}>Change tag</button> */}


      <Key />
    </div>

  )
}

// console.log(
//   <h1 id='1'>
//     <p>hello</p>
//     <p>hii</p>
//   </h1>
// );
export default App
