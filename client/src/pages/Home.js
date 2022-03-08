import React, { useEffect, useState, useMemo } from 'react'
import Products from '../components/Products'
import useQuery from '../hook/useQuery'
import Pagination from '../components/Pagination'
import { useLocation } from 'react-router-dom'
const Home = (props) => {

  const [products,setProducts] = useState([])
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)

  const {search} = useLocation()

  const {data,loading,error} = useQuery(`/products?limit=${limit}&page=${page}`)

  

  useEffect(()=>{
    if(data?.products) setProducts(data?.products)
  },[data?.products])

  const totalpage = useMemo(()=>{
    if(!data?.count) return 0;
    return Math.ceil(data.count / limit)
  },[data?.count])


  useEffect(()=>{
    const page = new URLSearchParams(search).get('page') || 1;
    setPage(Number(page))
  },[search])

  return (
    <>
      <div className="">
        <Products products={products}/>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <Pagination totalpage={totalpage} page={page} setPage={setPage}/>
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