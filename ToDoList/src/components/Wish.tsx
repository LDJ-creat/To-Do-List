// import { useEffect ,useState} from "react"
// import axios from "axios"
import "./Wish.css"
import { useNavigate } from "react-router-dom"

const Wish = () => {
    // const [randomWish, setRandomWish] = useState("")
    // useEffect(() => {
    //     axios.get("")
    //     .then(res=>{setRandomWish(res.data)})

    // }, [])
    const navigate = useNavigate()
    const handleSelectWish = () => {
        // const AddTaskMenuDisappear = document.getElementById('addTaskMenu')
        // const  HomeBackground=document.getElementById('Pisa')
        // const  taskListContainer=document.getElementById('task-list-container')
        // if(AddTaskMenuDisappear){
        //     AddTaskMenuDisappear.style.display='none'
        // }
        // if(HomeBackground){
        //     HomeBackground.style.filter='blur(0px)'
        // }
        // if(taskListContainer){
        //     taskListContainer.style.filter='blur(0px)'
        // }
        navigate('/randomWish')
    }
    const handleMyWish = () => {
        // const AddTaskMenuDisappear = document.getElementById('addTaskMenu')
        // const  HomeBackground=document.getElementById('Pisa')
        // const  taskListContainer=document.getElementById('task-list-container')
        // if(AddTaskMenuDisappear){
        //     AddTaskMenuDisappear.style.display='none'
        // }
        // if(HomeBackground){
        //     HomeBackground.style.filter='blur(0px)'
        // }
        // if(taskListContainer){
        //     taskListContainer.style.filter='blur(0px)'
        // }
        navigate('/myWish')
    }
    return (
        <div id='wishMenu'>
 
        
        <button id='select' onClick={handleSelectWish}> 抽取心愿</button>
            {/* <div className='WishMenuDor1'></div> */}
            <div className='WishMenuDor2'> </div>
            {/* <button id='WishMenu01'>抽取心愿</button> */}
        
        <button id='my-wish'  onClick={handleMyWish}> 我的心愿</button>
            {/* <div className='WishMenuDor1'></div> */}
            <div className='WishMenuDor3' > </div>
            {/* <button id='WishMenu02'>我的心愿</button> */}
        
        
        </div>
    )
}
export default Wish