import { useState } from 'react'

function ControlledComponent() {
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [form, setForm] = useState({ name: "Ayush", email: "ayushchauhan@gmail.com", password: "" });

    function singup(e) {
        e.preventDefault();
        console.log(form);
    }

    function handelInput(e) {
        // let value = e.target.value;
        // let name = e.target.name;

        const { value, name } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    console.log("re render");
    return (
        <div>
            <h1>Forms in React (Controlled Component)</h1>
            <form action="" onSubmit={singup}>
                <label htmlFor="name">Name: </label>
                <input value={form.name} type="text" name='name' id='name' onInput={handelInput} />
                <br />
                <label htmlFor="eamil">Email: </label>
                <input value={form.email} type="email" name='email' id='email' onInput={handelInput} />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='password' onInput={handelInput} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ControlledComponent
