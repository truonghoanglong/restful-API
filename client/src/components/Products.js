import React from 'react'
import ProductCard from './ProductCard'
const Products = ({products}) => {
    
  return (
    <div className="products">
        {
            products && products.length > 0 &&
            products.map(product =>(
                <ProductCard key={product._id} product={product}/>
            ))
        }
    </div>
  )
}

export default Products