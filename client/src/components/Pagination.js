import React from 'react'
import {Navigation, useNavigate} from 'react-router-dom'

const Pagination = ({totalpage,page}) => {

    const newArr = [...Array(totalpage)].map((_,i)=>i+1)

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
                newArr && newArr.length > 0 && 
                newArr.map((num)=>(
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