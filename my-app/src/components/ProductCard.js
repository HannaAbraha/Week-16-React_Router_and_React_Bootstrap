import { faShirt } from '@fortawesome/free-solid-svg-icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
 //when clicked on this page it should take the customers to product page to the product list, the font icon will give us the icon of the product
export default function ProductCard({ product }) {
  return (
    <div>
      { product.name }
      <FontAwesomeIcon icon={faShirt}/>
      <Link to={ "/" + product.id }>Details</Link>
      </div>
  )
}
