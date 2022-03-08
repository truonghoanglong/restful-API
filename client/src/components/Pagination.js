import React,{useState,useEffect} from 'react'
import {Navigation, useNavigate} from 'react-router-dom'

const Pagination = ({totalpage,page}) => {

    const [firstArr,setFristArr] = useState([])
    const [lastArr,setLastArr] = useState([])

    useEffect(()=>{
        const newArr = [...Array(totalpage)].map((_,i)=>i+1)
        console.log(newArr);

        if(totalpage - page >= 4){
            setFristArr(newArr.slice(page-1,page +2))
            setLastArr(newArr.slice(totalpage-1))
        }
    },[totalpage,page])
    console.log({firstArr,lastArr});

    

    const navigate = useNavigate()
    
    const isActive = (index)=> {
        if(index === page) return "active"
        return ""
    }

    const pev = () =>{
        const newPage = Math.max(page-1,1)
        navigate(`?page=${newPage}`)
    }

    const next = () =>{
        const newPage = Math.min(page+1,totalpage)
        navigate(`?page=${newPage}`)
    }

    const jump = (num) =>{
        navigate(`?page=${num}`)
    }

    return (
        <div className='pagination'>
            <button onClick={pev}>&laquo;</button>
            {
                firstArr && firstArr.length > 0 && 
                firstArr.map((num)=>(
                    <button key={num} className={`${isActive(num)}`} onClick={()=>jump(num)}>
                        {num}
                    </button>
                ))
            }
            <button>...</button>
            {
                lastArr && lastArr.length > 0 && 
                lastArr.map((num)=>(
                    <button key={num} className={`${isActive(num)}`} onClick={()=>jump(num)}>
                        {num}
                    </button>
                ))
            }
            <button onClick={next}>&raquo;</button>
        </div>
  )
}

export default Pagination