import { useState ,useRef,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './addTask.css'
interface Task{
    content:string;
    description:string;
  }
const addTask = () => {
    const [task, setTask]=useState   <Task>({content:'',description:''});
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isCycle, setIsCycle] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();//
        if(!value||!description)return
        setTask({content:value,description:description})
        let newTasks=[...JSON.parse(localStorage.getItem('tasks')||'[]'),task]
        localStorage.setItem('tasks',JSON.stringify(newTasks))
        navigate('/List')
        setValue('')
        setDescription('')
        setTask({content:'',description:''})
    }
    // useEffect(()=>{
    //     const handleFocus=()=>{if(textareaRef.current){
    //         textareaRef.current.placeholder=""
    //     }};
    //     if(textareaRef.current){
    //         textareaRef.current.addEventListener('focus',handleFocus)
    //     }
    //     return ()=>{
    //         if(textareaRef.current){
    //             textareaRef.current.removeEventListener('focus',handleFocus)
    //         }
    //     }
    // },[])
return(
    <div id='bgi'>  
        <textarea ref={textareaRef} placeholder="输入代办名称" value={value} onChange={(e) => setValue(e.target.value)} id='taskName'></textarea>
        <div id='Rectangle'>——————————————</div>
        <textarea ref={textareaRef} placeholder="描述or详细介绍(例如具体项目、时间)" value={description} onChange={(e)=>setDescription(e.target.value)} id='taskDescription'></textarea>
        <div id='setCycle'>
            <button id='isCycle' onClick={()=>setIsCycle(!isCycle)}></button>
           {isCycle&&<div id='Cycle'></div>}
        </div>
        {/* <div id='addTask'><button onClick={handleSubmit}  id='addTaskButton'></button></div> */}
        <button onClick={handleSubmit}  id='addTaskButton'></button>
    </div>
)
}
export default addTask