import React from 'react'
import { useNavigate } from "react-router"

function Login() {

    const navigate = useNavigate()

    function handlelogin(e) {
        e.preventDefault()
        console.log("Login");
        navigate("/dashboard")
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handlelogin}>
                <input type="text" name='username' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login