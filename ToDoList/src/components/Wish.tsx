// import { useEffect ,useState} from "react"
// import axios from "axios"
import "./Wish.css"

const Wish = () => {
    // const [randomWish, setRandomWish] = useState("")
    // useEffect(() => {
    //     axios.get("")
    //     .then(res=>{setRandomWish(res.data)})

    // }, [])
    return (
        <div id='wish'>
 
        
        <button id='select'> 抽取心愿</button>
            {/* <div className='WishMenuDor1'></div> */}
            <div className='WishMenuDor2'> </div>
            {/* <button id='WishMenu01'>抽取心愿</button> */}
        
        <button id='my-wish'> 我的心愿</button>
            {/* <div className='WishMenuDor1'></div> */}
            <div className='WishMenuDor3'> </div>
            {/* <button id='WishMenu02'>我的心愿</button> */}
        
        
        </div>
    )
}
export default Wish