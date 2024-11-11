import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask,finishTask } from '../../Store.ts';
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import axios from 'axios';
import FooterDor1 from '../../images/FooterDecoration1.svg'
import FooterDor2 from '../../images/FooterDecoration2.svg'
import listIcon from '../../images/Component 2.png'
import chartIcon from '../../images/Component 3.svg'
import wishesIcon from '../../images/Component 4.svg'
import './List.css';
import AddTask from '../../components/addTask.tsx';
// import AddWish from '../../components/addWish.tsx';
import Wish from "../../components/Wish.tsx"
// interface Task {
//   id: string;
//   event: string;
//   completed: boolean;
//   is_cycle: boolean;
//   description: string;
//   importanceLevel:number;
//   completed_Date: string;
// }
 
  
  const List: React.FC = () => {
    let tasks = useSelector((state: any) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [finish, setFinish] = useState(false);
  //   const [newTaskName, setNewTaskName] = useState('');
  //   const [newTaskDescription, setNewTaskDescription] = useState('');
  //   const [recycle, setRecycle] = useState(false);

    
  // useEffect(() => {
  //   const updateToBE=async()=>{
  //     const token=localStorage.getItem('token')
  //     if (token){
  //       await axios.post('url',tasks,{headers:{Authorization:token}})
  //     }
  //   };
  //   updateToBE();
  //  }, [tasks]);
  
  //   const handleAddTask = () => {
  //     if (newTaskName.trim()!== '') {
  //       const newTask: Task = {
  //         id: 0,
  //         name: newTaskName,
  //         description: newTaskDescription,
  //         isCompleted: false,
  //         isRecycle: recycle,
  //       };
  //       dispatch(addTask(newTask));
  //       setNewTaskName('');
  //       setNewTaskDescription('');
  //     }
  //   };
    const handleAddTaskMenu=()=>{
      const addTaskMenu=document.getElementById ('addTaskMenu')
      const taskListContainer=document.getElementById('task-list-container')
     
      if(addTaskMenu){
      addTaskMenu.style.display='block'
      addTaskMenu.style.zIndex= '1000';
      }
      if(taskListContainer){
        taskListContainer.style.filter='blur(10px)'
      }
      
    }

    const handleWishMenu=()=>{
      const WishMenu=document.getElementById ('wishMenu')
      const taskListContainer=document.getElementById ('task-list-container')
     
      if(WishMenu){
      WishMenu.style.display='block'
      WishMenu.style.zIndex= '1000';
      }
      if(taskListContainer){
        taskListContainer.style.filter='blur(10px)'
      }
     
  }
      
    const handleDelete=(index:number)=>{
      dispatch(deleteTask(index));
    }

    const handleFinish=(index:number)=>{
      setFinish(true)
      setTimeout(()=>{dispatch(finishTask(index))},600)

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
    
    <div id="task-list-container">
    <div id='Setting'></div>
    <button id='TaskListBack'></button>
  
      <Droppable droppableId="todo">
          {((provided:any)=>(
              <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>
  
         {tasks.map((task:any, index:any) => (
    <Draggable index={index} key={index} draggableId={`todo-${index}`}>
      {(provided) => (
        tasks[index].completed?null:<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div className='task'onDoubleClick={()=>handleDelete(index)}> 
            <button id='isFinishTask'onClick={()=>handleFinish(index)}></button>
            {finish?<button id='finishTask'onClick={()=>handleFinish(index)}></button>:null}
            <p className='taskListName'>{task.event}</p>
            <p className='task-description'>{task.description}</p>
            {/* {task.event} */}
            {/* {task.description} */}
          </div>
          {/* <button onClick={()=>handleDelete(index)}>删除</button> */}
          {/* <button onClick={()=>handleFinish}>完成</button> */}
        </div>
      )}
    </Draggable>
  ))}   
        {provided.placeholder}   
              </div>
          ))}
    </Droppable>
    {/* <input
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
        /> */}
         {/* <button onClick={()=>setRecycle(true)}>循环</button> <button onClick={()=>setRecycle(false)}>限时</button>
         <button onClick={handleAddTask}>添加任务</button> */}
            <div id='Fixed-List-Nav'>
            <button id='TaskListAdd' onClick={handleAddTaskMenu}></button>
            <div id='footer'>
                <img src={FooterDor1} alt="FooterDor1" id='FooterDor1' />
                <img src={FooterDor2} alt="FooterDor2" id='FooterDor2' />
                {/* <img src={listIcon} alt="listIcon" id='listIcon' />
                <img src={chartIcon} alt="chartIcon" id='chartIcon' />
                <img src={wishesIcon} alt="wishesIcon" id='wishesIcon'/> */}
                <button id='listIcon'></button>
                <button  id='chartIcon' ></button>
                <button id='wishesIcon'onClick={handleWishMenu}></button>
                <span id='list'>清单</span>
                <span id='wishes'>心愿</span>
            </div>
            </div>
          {/* <AddTask />
          <AddWish /> */}
      </div>
      <AddTask />
      <Wish />
    </DragDropContext>
    );
  };
  
  export default List;

