
import Body from "./component/Body"
import NewFooter, { Footer } from "./component/Footer"
import Navbar from "./component/Navbar"
import Products from "./component/Products"

const user = {
  name: "Ayush",
  isLogedIn: true
}

const products = [
  {
    title: "Nike shoes",
    price: 30
  },
  {
    title: "Iphone 18 pro max",
    price: 1000
  },
  {
    title: "Goldstar",
    price: 10
  }
]


function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Navbar user={user} />
      <h1>hii</h1>
      <Products products={products} />
      <Body />
      <Footer />
      {/* <NewFooter/> */}
    </div>
  )
}

export default App
