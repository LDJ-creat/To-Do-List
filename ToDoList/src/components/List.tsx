import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask,finishTask } from '../Store.ts';
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import axios from 'axios';
interface Task {
    id: number;   
    name: string;
    description: string;
    isCompleted: boolean;
    isRecycle: boolean;
  }
 
  
  const List: React.FC = () => {
    let tasks = useSelector((state: any) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [recycle, setRecycle] = useState(false);

    
  useEffect(() => {
    const updateToBE=async()=>{
      const token=localStorage.getItem('token')
      if (token){
        await axios.post('url',tasks,{headers:{Authorization:token}})
      }
    };
    updateToBE();
   }, [tasks]);
  
    const handleAddTask = () => {
      if (newTaskName.trim()!== '') {
        const newTask: Task = {
          id: 0,
          name: newTaskName,
          description: newTaskDescription,
          isCompleted: false,
          isRecycle: recycle,
        };
        dispatch(addTask(newTask));
        setNewTaskName('');
        setNewTaskDescription('');
      }
    };
    const handleDelete=(index:number)=>{
      dispatch(deleteTask(index));
    }

    const handleFinish=(index:number)=>{
      dispatch(finishTask(index))

    }
    const onDragEnd = (result:any) => {
      if (!result.destination) return;
      const newTodos = [...tasks];
      const [removedTodo] = newTodos.splice(result.source.index, 1);
      newTodos.splice(result.destination.index, 0, removedTodo);
      // 在这里可以触发状态更新或回调函数，以更新任务列表
      dispatch(updateTask(newTodos));
     
    };
    return (
      <DragDropContext
      onDragEnd={onDragEnd}
      >
      <h2> 任务清单</h2>
    <div className="task-list">
  
      <Droppable droppableId="todo">
          {((provided:any)=>(
              <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>
  
         {tasks.map((task:any, index:any) => (
    <Draggable index={index} key={index} draggableId={`todo-${index}`}>
      {(provided) => (
        tasks[index].isCompleted?null:<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div onDoubleClick={()=>handleDelete(index)}> {task.name} - {task.description}</div>
          <button onClick={()=>handleDelete(index)}>删除</button>
          <button onClick={()=>handleFinish}>完成</button>
        </div>
      )}
    </Draggable>
  ))}   
        {provided.placeholder}   
              </div>
          ))}
    </Droppable>
    <input
          type="text"
          placeholder="任务名称"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="任务描述"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={()=>setRecycle(true)}>循环</button> <button onClick={()=>setRecycle(false)}>限时</button>
        <button onClick={handleAddTask}>添加任务</button>
        
      </div>
    </DragDropContext>
    );
  };
  
  export default List;

