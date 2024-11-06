import { ClassAttributes, HTMLAttributes, JSXElementConstructor, LegacyRef, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import axios from "axios";
import { JSX } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
interface Task{
  content:string;
  description:string;
}
let tasks:Task[]=[]
const list=()=>{
  let [list,setList]=useState(tasks);
  const navigate=useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('token')){
      const email=localStorage.getItem('email')
      axios.post('url',email)
      .then(res=>{setList(res.data)
         localStorage.setItem('list',res.data)
      })
      .catch(err=>{console.error(err)})
      
    }else{
      setList(JSON.parse(localStorage.getItem('list')||'[]'))
    }
  },[]) //需不需要加[]
  // useEffect(()=>{
  //   if(JSON.parse(localStorage.getItem('list')||'[]')==list) return
  //   localStorage.setItem('list',JSON.stringify(list))
  // },[list])
  // useEffect(()=>{
  //   if(JSON.parse(localStorage.getItem('list')||'[]')==list) return
  //   setList(JSON.parse(localStorage.getItem('list')||'[]'))
  // },[JSON.parse(localStorage.getItem('list')||'[]')])

  const Delete=()=>{
    setList(list.filter((index)=>index!==index))
  }
  const onDragEnd = (result:any) => {
    if (!result.destination) return;
    const newlist = [...list];
    const [removedlist] = newlist.splice(result.source.index, 1);
    newlist.splice(result.destination.index, 0, removedlist);
    setList(newlist);
  };
    return(
<DragDropContext
    onDragEnd={onDragEnd}
    >
    <h2>To Do List</h2>
    <button onClick={()=>navigate('/addTask')}>Add Task</button>
  <div className="task-list">

    <Droppable droppableId="list">
        {((provided: { innerRef: LegacyRef<HTMLDivElement> | undefined; droppableProps: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>; placeholder: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=>(
            <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>

       {list.map((list, index) => (
  <Draggable index={index} key={index} draggableId={`list-${index}`}>
    {(provided) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div>{list.content}</div>
        <div>{list.description}</div>
        <button onClick={()=>Delete()}>Delete</button>
      </div>
    )}
  </Draggable>
))}   
      {provided.placeholder}   
            </div>
        ))}
  </Droppable>
    </div>
  </DragDropContext>
)
};
  

export default list;