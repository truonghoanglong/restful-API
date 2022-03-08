import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const usePagination = ({totalpage,page}) => {

    const [firstArr,setFristArr] = useState([])
    const [lastArr,setLastArr] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const newArr = [...Array(totalpage)].map((_,i)=>i+1)
        console.log(newArr);
        if(totalpage < 4)
            return setFristArr(newArr)
        if(totalpage - page >= 4){
            setFristArr(newArr.slice(page-1,page +2))
            setLastArr(newArr.slice(totalpage-1))
        }else{
            setFristArr(newArr.slice(totalpage-4,totalpage))
            setLastArr([])
        }
    },[totalpage,page])
    console.log({firstArr,lastArr});

    

    
    
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