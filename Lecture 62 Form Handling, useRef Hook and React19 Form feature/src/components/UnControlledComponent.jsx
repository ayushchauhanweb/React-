
function UnControlledComponent() {
    function singup(e) {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target)
        console.log(Object.fromEntries(formData));
    }

    console.log("re render");

    return (
        <div>
            <h1>Forms in React (UnControlled Component)</h1>
            <form action="" onSubmit={singup}>
                <label htmlFor="name">Name: </label>
                <input type="text" name='name' id='name' />
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

export default UnControlledComponent
