import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../Store.ts';
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
interface Task {
    id: number;
    name: string;
    description: string;
  }

  
  
  const List: React.FC = () => {
    let tasks = useSelector((state: any) => state.tasks.tasks);
    const dispatch = useDispatch();
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
  
    const handleAddTask = () => {
      if (newTaskName.trim()!== '') {
        const newTask: Task = {
          id: Date.now(),
          name: newTaskName,
          description: newTaskDescription,
        };
        dispatch(addTask(newTask));
        setNewTaskName('');
        setNewTaskDescription('');
      }
    };
    const handleDelete=(index:number)=>{
      dispatch(deleteTask(index));
    }
    const onDragEnd = (result:any) => {
      if (!result.destination) return;
      const newTodos = [...tasks];
      const [removedTodo] = newTodos.splice(result.source.index, 1);
      newTodos.splice(result.destination.index, 0, removedTodo);
      // 在这里可以触发状态更新或回调函数，以更新任务列表
      dispatch(updateTask(newTodos));

      console.log(tasks)
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
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <div> {task.name} - {task.description}</div>
          <button onClick={()=>handleDelete(index)}>删除</button>
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
        <button onClick={handleAddTask}>添加任务</button>
      </div>
    </DragDropContext>
    );
  };
  
  export default List;

