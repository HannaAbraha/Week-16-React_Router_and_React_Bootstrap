import React from 'react'
import ShoppingPage from './components/ShoppingPage'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import { Routes } from 'react-router-dom'

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ShoppingPage/>}/>
        <Route path="/:productId" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  )
}
