import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import ProductInfo from '../components/ProductInfo'

const ProductDetail = () => {
  const {id} = useParams()

  const [product,setProduct] = useState()
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/products/${id}`)
    .then(res=>setProduct(res.data))
  },[id])
  return (
    <div>
      {product && <ProductInfo product={product} />}
    </div>
  )
}

export default ProductDetail