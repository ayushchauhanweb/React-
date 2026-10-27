import { useRef } from "react";

function UnControlledComponentUseRef() {

    const nameRef = useRef("Ayush")

    function singup(e) {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData));
        // console.log(nameRef.current.value);
        let nameTag1 = nameRef.current
        let nameTag2 = document.querySelector("#name2")
        console.log(nameTag1, nameTag2);
        console.log(nameTag1 === nameTag2);

    }

    console.log("re render");

    return (
        <div>
            <h1>Forms in React (UnControlled Component - useRef)</h1>
            <form action="" onSubmit={singup}>
                <label htmlFor="name2">Name:{" "} </label>
                <input ref={nameRef} type="text" name='name' id='name2' />
                <br />
                <label htmlFor="eamil">Email: </label>
                <input type="email" name='email' id='email' />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='password' />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UnControlledComponentUseRef
