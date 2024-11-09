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
 
        
        <div id='select'>
            <div id='WishMenuDor1'></div>
            <div id='WishMenuDor2'> </div>
            <div id='word'>抽取心愿</div>
        </div>
        <div id='my-wish'>
            <div id='WishMenuDor1'></div>
            <div id='WishMenuDor3'> </div>
            <div id='word'>我的心愿</div>
        </div>
        
        </div>
    )
}
export default Wish