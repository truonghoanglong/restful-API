import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination'
import Products from '../components/Products'
import useQuery from '../hook/useQuery'
const Home = (props) => {

    const [products,setProducts] = useState([])
    const [limit,setLimit] = useState(5)
    // const [page,setPage] = useState(1)

    const {search} = useLocation()

    const ref = useRef(0)
    
    const page =useMemo(()=>{
        const page = new URLSearchParams(search).get('page') || 1;
        return Number(page)
    },[search])
    
    const {data,loading,error} = useQuery(`/products?limit=${limit}&page=${page}`)

  

    useEffect(()=>{
        if(data?.products) setProducts(data?.products)
    },[data?.products])

    const totalpage = useMemo(()=>{
        if(!data?.count) return 0;
        return Math.ceil(data.count / limit)
    },[data?.count])
 


    return (   
        <div className="">
            <h2>Render: {ref.current++}</h2>
            <Products products={products}/>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <Pagination totalpage={totalpage} page={page} />
        </div>
    )
}

export default Home
