import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from '../components/Products'
import CallApi from '../ApiConfig/index'
const Home = (props) => {
  const [products,setProducts] = useState('')

  useEffect(()=>{
    axios.get('api/products')
    .then(res=>{
      setProducts(res.data.products)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  //  useEffect(()=>{
  //   async function a (req, res)  {
  //     try{
  //      const data = await CallApi("api/products", "GET", null)
       
  //      setProducts(res.data.products)
  //      }catch(err){
  //        console.log(err)
  //      }
  //   }
  //   a()
  // },[])
  return (
    <>
      <div className="">
        <Products products={products}/>
      </div>
    </>
  )
}

export default Home
 // useEffect(()=>{
  //   async function a (req, res)  {
  //     try{
  //      const data = await CallApi("api/products", "GET", null)
       
  //      console.log(data.data.products)
  //      }catch(err){
  //        console.log(err)
  //      }
  //   }
  //   a()
  // },[])