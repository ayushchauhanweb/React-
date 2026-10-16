import React, { useState } from 'react'


function Product({ name }) {
    const [quantity, setProducts] = useState(0)

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => setProducts((prev) => prev + 1)}>Quantity : {quantity}</button>
        </div>

    )

}

function Key() {
    const [products, setProducts] = useState([
        { id: 1, name: "keyboad" },
        { id: 2, name: "mouse" },
        { id: 3, name: "monitor" },
        { id: 4, name: "headphone" },
        { id: 5, name: "fan" }
    ])

    function removeFirstProduct() {
        setProducts((prev) => prev.slice(1))
    }

    return (
        <div>
            <ul>
                {products.map(({ id, name }) => (
                    <Product key={id} name={name} />
                ))}
            </ul>
            <button onClick={removeFirstProduct}>Remove first product</button>
        </div>
    )
}

export default Key;