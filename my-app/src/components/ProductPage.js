import { Button } from 'react-bootstrap'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage({ productList, addToCart }) {

  const { productId } = useParams()
 //this will get us at the particular product we are looking for from the product list
  const Products = productList.find(p => p.id === parseInt(productId))

  return (
    <div>
      {Products.name}
    <Button variant="success" onClick={() => addToCart(Products)}>Add to Cart</Button>
    <Button variant="primary" onClick={() => updateToCart(Products)}>Update to Cart</Button> 
    <Button variant="Danger" onClick={() => DeleteToCart(Products)}>Delete to Cart</Button>
    </div>
  )
}
