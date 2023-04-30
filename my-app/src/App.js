import React from 'react'
import './App.css'
import 'react-bootstrap'
import ShoppingPage from './components/ShoppingPage'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import {Link, Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { TEST_PRODUCTS } from './components/Products'

export default function App() {
  const [ProductList, setProductList] = useState( TEST_PRODUCTS )
  const [cart, setCart] = useState([ {
    id: 0,
    name: "Shoes"
  }])

  const navigate = useNavigate()
 //this will add a new item to the cart
  const addToCart = (product) => {
    const newCartItem = { ...product}
    setCart( cart.concat(newCartItem) )
    navigate( "/cart")
  }
  //this will update the cart
  const updateToCart = (product) => {
    const updateCartItem = { ...product}
    setCart( cart.concat(updateCartItem) )
  }

  const deleteToCart = (product) => {
    const deleteCartItem = { ...product}
    setCart( cart.concat(deleteCartItem) )
  }
 //this will show the shopping page, product page will show the products, cart page will show the cart
  return (
    <div>
      <NavbarComp/>
      <h1>Shopping App</h1> 
      <Link to="/cart">Cart</Link>
      <Link to="/">Shop</Link>
      <Routes>
        <Route path="/" element={<ShoppingPage ProductList={ProductList} />}/>
        <Route path="/:productId" element={<ProductPage ProductList={ProductList} addToCart={addToCart}/>}/>
        <Route path="/cart" element={<CartPage cart={cart} />}/>
      </Routes>
    </div>
  )
}

