import React from 'react'
import ProductCard from './ProductCard'
 //this will show the products we select in the cart
export default function CartPage({ cart }) {
  return (
    <div>
      { cart.map(p => <ProductCard product={p}/>)}
    </div>
  )
}
