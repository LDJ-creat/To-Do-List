import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  deleteTask, updateTask,finishTask } from '../../Store.ts';
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import FooterDor1 from '../../images/FooterDecoration1.svg'
import FooterDor2 from '../../images/FooterDecoration2.svg'
import './List.css';
import AddTask from '../../components/addTask.tsx';
import Wish from "../../components/Wish.tsx"
import { useNavigate } from 'react-router-dom';

  
  const List: React.FC = () => {
    let tasks = useSelector((state: any) => state.tasks.tasks);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [finish, setFinish] = useState(false);

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
    <button id='TaskListBack' onClick={()=>navigate('/Home')}></button>
  
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

            <div id='Fixed-List-Nav'>
            <button id='TaskListAdd' onClick={handleAddTaskMenu}></button>
            <div id='footer'>
                <img src={FooterDor1} alt="FooterDor1" id='FooterDor1' />
                <img src={FooterDor2} alt="FooterDor2" id='FooterDor2' />
                <button id='listIcon'></button>
                <button  id='chartIcon' ></button>
                <button id='wishesIcon'onClick={handleWishMenu}></button>
                <span id='list'>清单</span>
                <span id='wishes'>心愿</span>
            </div>
            </div>
      </div>
      <AddTask />
      <Wish />
    </DragDropContext>
    );
  };
  
  export default List;

