import { useState, useRef } from "react";
import './addWish.css'
import { useDispatch } from "react-redux";
import { addWish } from "../Store.ts";
import { useNavigate } from "react-router-dom";

interface Wish {
    id:string;
    event:string;
    is_cycle:boolean;
    description:string;
    is_shared:boolean;
  }

const AddWish = () => {
    // const [task, setTask]=useState   <Task>({content:'',description:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isCycle, setIsCycle] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();//
        if(!value||!description)return
        if (value.trim() !== '' ){
            const newWish: Wish={
                id: Date.now().toString(),
                event: value.trim(),
                is_cycle: isCycle,
                description: description.trim(),
                is_shared: false,
            }
        
        dispatch(addWish(newWish));
   
        // setTask({content:value,description:description})
        // let newTasks=[...JSON.parse(localStorage.getItem('tasks')||'[]'),task]
        // localStorage.setItem('tasks',JSON.stringify(newTasks))
        // setValue('')
        // setDescription('')
        // setTask({content:'',description:''})
        setValue('')
        setDescription('')
        const addwish=document.getElementById('addWishMenu')
        const myWish=document.getElementById('my-wish')
        if(addwish){
            addwish.style.display='none'
        }
        if(myWish){
            myWish.style.filter="blur(0px)"
        }
    };
    }
    return(
    <div id='addWishMenu'>  
    <textarea ref={textareaRef} placeholder="输入心愿名称" value={value} onChange={(e) => setValue(e.target.value)} id='addWishName'></textarea>
    <div id='Rectangle'>——————————————</div>
    <textarea ref={textareaRef} placeholder="描述or详细介绍(例如具体项目、时间)" value={description} onChange={(e)=>setDescription(e.target.value)} id='addWishDescription'></textarea>
    <div id='setWishCycle'>
        <button id='isWishCycle' onClick={()=>setIsCycle(!isCycle)}></button>
       {isCycle&&<button id='WishCycle' onClick={()=>setIsCycle(!isCycle)}></button>}
    </div>
    {/* <div id='addTask'><button onClick={handleSubmit}  id='addTaskButton'></button></div> */}
    {/* onClick={handleSubmit}  */}
    <button onClick={handleSubmit} id='addWishButton'></button>
    <button id='viewWishButton' onClick={()=>navigate('/wishlist')}>查看他人心愿</button>
</div>
    )
}
export default AddWish;