import { useEffect, useState } from 'react'
import './index.css';
import axios, { Axios } from "axios"
function Timer() {

  useEffect(() => {

    const id = setInterval(() => {
      console.log("Timer");
    }, 1000)

    return () => {
      console.log("Timer clean up");
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      <h2>Timer Component</h2>
    </div>
  )

}

function App() {
  const [Productcount, setProductCount] = useState(0)
  const [product, setProduct] = useState([])
  const [name, setName] = useState("")
  const [showTimer, setShowTimer] = useState(true)
  const [isLoading, setIsLoading] = useState(true)


  // console.log(Productcount);

  useEffect(() => {

    async function getProducts() {
      // let response = await fetch("https://dummyjson.com/products")
      // let data = await response.json()

      let { data } = await axios.get("https://dummyjson.com/products")
      // console.log(data);
      setProductCount(data.total)
      setProduct(data.products)
      setIsLoading(false)

    }

    getProducts()

    // console.log("hii");

    return function () {
      // console.log("Cleanup function");
    }

  }, [name])


  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>Toggel timer component</button>
      <br />
      Product - {Productcount}
      <br />
      <input type="text" onInput={(e) => setName(e.target.value)} />

      <ul>
        {isLoading ? <div class="loader"></div> : product.map((p) => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  );
}

export default App
