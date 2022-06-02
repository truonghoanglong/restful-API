import React, { useRef } from 'react'
import usePagination from '../hook/usePagination'

const Pagination = React.memo(({totalpage,page}) => {
    const {firstArr,lastArr,isActive,pev,next,jump} = usePagination({totalpage,page})
    const ref = useRef(0)
    return (
        <div className='pagination'>
             <h2>Render: {ref.current++}</h2>
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
})

export default Pagination