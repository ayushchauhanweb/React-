

function Navbar({ user = { isLogedIn: false, name: Anonymous } }) {
    const { isLogedIn, name } = user
    return (
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>{isLogedIn ? name : "Login"}</li> {/* Conditional rendering */}
        </ul>
    )
}

export default Navbar;