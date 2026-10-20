import { useState } from 'react'
import { data, Link, Outlet, Route, Routes, useParams } from 'react-router'
import NotFoundPage from './components/NotFoundPage'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


const products = [
  {
    id: 1,
    title: "Laptop"
  },
  {
    id: 2,
    title: "Mobile"
  }
]

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {
          products.map((p) => <section><Link to={`/product-page/${p.id}`}>{p.title}</Link></section>)
        }
      </div>
    </div>
  )
}

function ProductPage() {
  const { id } = useParams()

  const data = products.find((p) => p.id === Number(id))


  return <div>
    <h1>Product page</h1>
    {
      data ? <p>{data.title}</p> : "Products not found"
    }
  </div>
}
function AboutUs() {
  return <h1>About us</h1>
}

function Navbar() {
  return (
    <>
      <ul>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/product-page"}>Product page</Link>
        <br />
        <Link to={"/about-us"}>About us</Link>
        <br />
        <Link to={"/login"}>Login</Link>
      </ul>
      <Outlet />
    </>
  )
}

{/* <ul>
      <li onClick={() => setPage("home")}>Home</li>
      <li onClick={() => setPage("productPage")}>Product page</li>
      <li onClick={() => setPage("aboutUs")}>About us</li>
    </ul>

    { page == "home" && <Home /> }
    { page == "productPage" && <ProductPage /> }
    { page == "aboutUs" && <AboutUs /> }
*/}

function App() {
  const [page, setPage] = useState("home")

  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route path="/" element={<Home />} />
        <Route path="/product-page/:id/" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route />

      <Route path='/login' element={<Login />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes >

  )
}

export default App
