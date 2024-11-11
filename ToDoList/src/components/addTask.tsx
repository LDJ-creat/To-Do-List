import { useState ,useRef,useEffect,forwardRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './addTask.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../Store.ts'
interface addTask{

}
interface Task{
    content:string;
    description:string;
  }
const AddTask =() => {
    const tasks = useSelector((state: any) => state.tasks.tasks);
    const dispatch = useDispatch();
    // const [task, setTask]=useState   <Task>({content:'',description:''});
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isCycle, setIsCycle] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const navigate = useNavigate();

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();//
        if(!value||!description)return
        // const AddTaskMenuDisappear = document.getElementById('addTaskMenu')
        // if(AddTaskMenuDisappear){
        //     AddTaskMenuDisappear.style.display='none'
        // }
        // setTask({content:value,description:description})

        // let newTasks=[...JSON.parse(localStorage.getItem('tasks')||'[]'),task]
        // localStorage.setItem('tasks',JSON.stringify(newTasks))
        // navigate('/Home')
        setValue('')
        setDescription('')
        
            if (value.trim()!== '') {
              const newTask: Task = {
                // id: Date.now(),
                content: value,
                description: description,
              };
              dispatch(addTask(newTask));
         
         
        // setTask({content:'',description:''})
        const AddTaskMenuDisappear = document.getElementById('addTaskMenu')
        if(AddTaskMenuDisappear){
            AddTaskMenuDisappear.style.display='none'
        }
        // navigate('/rehome')
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

    // const handleAddTaskMenuDisappear = () => {
    //     const AddTaskMenuDisappear = document.getElementById('addTaskMenu')
    //     if(AddTaskMenuDisappear){
    //         AddTaskMenuDisappear.style.display='none'
    //     }
         }
return(
    <div id='addTaskMenu' >
       
        <textarea ref={textareaRef} placeholder="输入代办名称" value={value} onChange={(e) => setValue(e.target.value)} id='taskName'></textarea>
        <div id='Rectangle'>————————————————</div>
        <textarea ref={textareaRef} placeholder="描述or详细介绍(例如具体项目、时间)" value={description} onChange={(e)=>setDescription(e.target.value)} id='taskDescription'></textarea>
        <div id='setTaskCycle'>
            <button id='isTaskCycle' onClick={()=>setIsCycle(!isCycle)}></button>
           {isCycle&&<button id='TaskCycle'onClick={()=>setIsCycle(!isCycle)}></button>}
        </div>
        {/* <div id='addTask'><button onClick={handleSubmit}  id='addTaskButton'></button></div> */}
        <button onClick={handleSubmit}  id='addTaskButton' ></button>
        
    </div>
)
}
export default AddTask