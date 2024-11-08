import { useEffect ,useState} from "react"
import axios from "axios"

const RandomWishes = () => {
    const [randomWish, setRandomWish] = useState("")
    useEffect(() => {
        axios.get("")
        .then(res=>{setRandomWish(res.data)})

    }, [])
    return (
        <div>
        <h1>随机心愿</h1>
        <p>{randomWish}</p>
        <button>抽取心愿</button>
        </div>
    )
}
export default RandomWishes