import React from 'react'
import usePagination from '../hook/usePagination'

const Pagination = ({totalpage,page}) => {
    const {firstArr,lastArr,isActive,pev,next,jump} = usePagination({totalpage,page})
    
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
            {lastArr.length>0 && <button>...</button>}
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