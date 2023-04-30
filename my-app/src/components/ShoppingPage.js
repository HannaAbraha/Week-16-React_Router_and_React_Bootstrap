import React from 'react'
import ProductCard from './ProductCard'

 //this will show all the products to be shopped
export default function ShoppingPage({ productList}) {
  return (
    <div className='MY-App'>
    <header className='App-header'>
      <h1 className='App-title'>ShoppingPage</h1>
    </header>
    <ProductCard getProducts={this.getProducts} />
    {this.state.productList.map((products) => {
      return <p>{ products.title }</p>
    })}
  </div>
);
}

