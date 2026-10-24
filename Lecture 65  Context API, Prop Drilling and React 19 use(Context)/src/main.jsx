import { createContext, StrictMode, use } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";


export let UserContext = createContext(null)

let username = "Ayush"
createRoot(document.getElementById('root')).render(
  // <>
  //   <UserContext value={username}>
  //     <App />
  //   </UserContext>
  // </>,

  <ThemeProvider>
    <App />
  </ThemeProvider>
)
