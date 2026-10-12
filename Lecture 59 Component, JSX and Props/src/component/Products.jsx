import React from 'react'
import { Product } from './Product'

function Products({ products = [] }) {
  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      {products.map(({ title, price }) => {
        return <Product title={title} price={price} />
      })}
    </div>
  )
}

export default Products

