import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const useQuery = (url) => {

    const [data,setData] = useState()
    const [loading,setLoading] = useState()
    const [error,setError] = useState() 

    useEffect(()=>{
        let here = true;

        setLoading(true)

        axios.get(url)
        .then(res=>{
            if(!here) return;
            setData(res.data)
        })
        .catch(error=>{
            if(!here) return;
            setError(error.response.data.msg)
            toast.error(error.response.data.msg)
          
        })
        .finally(()=>{
            if(!here) return;
            setLoading(false)
        })
    },[url])

  return {data , loading, error}
}

export default useQuery