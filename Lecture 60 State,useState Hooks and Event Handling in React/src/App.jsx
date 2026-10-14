import { useState } from 'react'
import Counter from './Component/Counter'
import Navbar from './Component/Navbar'
import Todo from './Component/Todo'

function App() {


  let [value, setValue] = useState(0)
  function printValueCount(val) {
    setValue(val)
  }


  return (
    <div>
      {/* <Navbar count={value} />
      <Counter printValueCount={printValueCount} /> */}
      <Todo/>
    </div>
  )
}

export default App
