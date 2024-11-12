import { useState ,useRef} from 'react';
import './addTask.css'
import { useDispatch } from 'react-redux'
import { addTask } from '../Store.ts'

interface Task {
    id: string;
    event: string;
    completed: boolean;
    is_cycle: boolean;
    description: string;
    importanceLevel:number;
    completed_Date: string;
}
const AddTask =() => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isCycle, setIsCycle] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);


    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();//
        if(!value||!description)return;
        
        setValue('')
        setDescription('')
        
            if (value.trim()!== '') {
              const newTask: Task = {
                id: Date.now().toString(),
                event: value,
                completed: false,
                is_cycle: isCycle,
                description: description,
                importanceLevel: 0,
                completed_Date: '',
              };
              dispatch(addTask(newTask));
         
        const AddTaskMenuDisappear = document.getElementById('addTaskMenu')
        const  HomeBackground=document.getElementById('Pisa')
        const  taskListContainer=document.getElementById('task-list-container')
        if(AddTaskMenuDisappear){
            AddTaskMenuDisappear.style.display='none'
        }
        if(HomeBackground){
            HomeBackground.style.filter='blur(0px)'
        }
        if(taskListContainer){
            taskListContainer.style.filter='blur(0px)'
        }

    }

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
        <button onClick={handleSubmit}  id='addTaskButton' ></button>
        
    </div>
)
}
export default AddTask