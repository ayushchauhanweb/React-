import { use } from "react";

let colors = ["red", "blue", "black", "yellow", "brown"]

let user = {
  name: "Ayush",
  isOnline: false
}

function printName() {
  console.log(user.name);
}

function App() {
  return (
    <>
      <div>Hello</div>
      <div>Hiii</div>
      <p>{5 + 5}</p>
      <p>5+5</p>
      <ul>
        {colors.map((c) => {
          return <li>{c}</li>
        })}
      </ul>

      <p>{user.isOnline ? `${user.name} is online` : `${user.name} is offline`}</p>

      <button onClick={printName}>click on me</button>
    </>
  )
}

export default App;