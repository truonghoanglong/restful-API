import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import ProductInfo from '../components/ProductInfo'
import useQuery from '../hook/useQuery'

const ProductDetail = () => {
  const {id} = useParams()
  const {data:product,loading,error} = useQuery(`/products/${id}`)
  return (
    <div>
      {product && <ProductInfo product={product} />}
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
    </div>
  )
}

export default ProductDetail