import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const usePagination = ({totalpage,page}) => {

    // const [firstArr,setFristArr] = useState([])
    // const [lastArr,setLastArr] = useState([])
    const navigate = useNavigate()

    const {firstArr,lastArr} = useMemo(()=>{
        const newArr = [...Array(totalpage)].map((_,i)=>i+1)
        
        if(totalpage < 4)
            return {
                firstArr :newArr,
                lastArr :[]
            }
        if(totalpage - page >= 4){
            return{
                firstArr: newArr.slice(page-1,page +2),
                lastArr:newArr.slice(totalpage-1)
            }
        }else{
            return{
                firstArr:newArr.slice(totalpage-4,totalpage),
                lastArr: []
            }
        }
    },[totalpage,page])
    
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


    return({firstArr,lastArr,navigate,isActive,pev,next,jump})
}

export default usePagination