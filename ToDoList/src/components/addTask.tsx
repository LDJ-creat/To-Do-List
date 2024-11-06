import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface Task{
    content:string;
    description:string;
  }
const addTask = () => {
    const [task, setTask]=useState   <Task>({content:'',description:''});
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
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
return(
    <div>
        <input type="text"  placeholder="任务名称" value={value} onChange={(e) => setValue(e.target.value)}/>
        <input type="text" placeholder="任务描述" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={handleSubmit}>确认添加</button>
    </div>
)
}
export default addTask