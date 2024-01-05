import { useEffect, useState } from "react"



const useFetch = (url)=>{
    //logical
const[data , setData] = useState(null)
useEffect(()=>{
    fetch(url).then(res=>{
    res.json().then(result=>{
        setData(result)

    })
})
},[])
return data
}

export default useFetch
 