
import { Product } from './Product'
import Products from './Products'

let books = [
    {
        title: "Book 1",
        price: 200
    }
]

function Body() {
    return (
        <div>
            {
                books.map(({ title, price }) => {
                    return <Product title={title} price={price} />
                })
            }
        </div>

    )
}

export default Body