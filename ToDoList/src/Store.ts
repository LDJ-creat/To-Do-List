import axios from 'axios'
interface Task {
    id: string;
    event: string;
    completed: boolean;
    is_cycle: boolean;
    description: string;
    importanceLevel:number;
    completed_Date: string;
  }
interface Wish {
  id:string;
  event:string;
  is_cycle:boolean;
  description:string;
  is_shared:boolean;
}
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';




interface TaskState {
  tasks: Task[];
}

interface WishState{
  wishes: Wish[];
}
const initialState: TaskState = {

    tasks: JSON.parse(localStorage.getItem('tasks') as string) || [],
    
  };
  
 const wishInitialState: WishState = {
    wishes: JSON.parse(localStorage.getItem('wishes') as string) || [],
  };

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      // state.tasks.map((item,index)=>{
      //   item.id=index;
      // })
      // const newTasks:Task[]=[]
      // for (let i=0;i<state.tasks.length;i++){
      //   newTasks.push({
      //     id:Date.now().toString(),
      //     event:state.tasks[i].event,
      //     description:state.tasks[i].description,            
      //     isCompleted:state.tasks[i].isCompleted,
      //     isCycle:state.tasks[i].isCycle,
      //     completed_Date:"",
      // })
      // }
      // state.tasks=newTasks;
      const token=localStorage.getItem('token');
      if (token){
        const add=async()=>{
          await axios.post('url',
            JSON.stringify(action.payload),
            {headers:{Authorization:`Bearer ${token}`}},
          )
        };
        add();
      }else{
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
      // localStorage.setItem('tasks', JSON.stringify(state.tasks));
      
    },
    deleteTask:(state, action)=>{
        state.tasks.splice(action.payload, 1);
        // state.tasks.map((item,index)=>{
        //   item.id=index;
        // })
        // const newTasks:Task[]=[]
        // for (let i=0;i<state.tasks.length;i++){
        //   newTasks.push({id:i,
        //     name:state.tasks[i].name,
        //     description:state.tasks[i].description,            
        //     isCompleted:state.tasks[i].isCompleted,
        //     isRecycle:state.tasks[i].isRecycle})
        // }
        // state.tasks=newTasks;
        const token=localStorage.getItem('token');
        if(token){
          const deleteTask=async()=>{
            await axios.delete(`url/${action.payload}`,
            {headers:{Authorization:`Bearer ${token}`}},
          )
          };
          deleteTask();
        }else{
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
        // localStorage.setItem('tasks', JSON.stringify(state.tasks));

    },
    updateTask:(state, action)=>{//
        state.tasks=action.payload;
        // state.tasks.map((item,index)=>{
        //   item.id=index;
        // })
        const newTasks:Task[]=[]
        for (let i=0;i<state.tasks.length;i++){
          newTasks.push({
            id:state.tasks[i].id,
            event:state.tasks[i].event,
            description:state.tasks[i].description,            
            completed:state.tasks[i].completed,
            is_cycle:state.tasks[i].is_cycle,
            importanceLevel:i,
            completed_Date:state.tasks[i].completed_Date,
          })
        }
        state.tasks=newTasks;
        const token=localStorage.getItem('token');
        if(token){
          const updateTask=async()=>{
            await axios.put(`url`,
            JSON.stringify(state.tasks),
            {headers:{Authorization:`Bearer ${token}`}},
          )
          };
          updateTask();
        }else{
          localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
        
        // localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    finishTask:(state, action)=>{
      state.tasks[action.payload].completed=true;
      state.tasks[action.payload].completed_Date=new Date().toISOString();
      const token=localStorage.getItem('token');
      if(token){
        const finish=async()=>{
          await axios.post('url',
            state.tasks,
            {headers:{Authorization:`Bearer ${token}`}},
          )
        };
        finish();
      }else{
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    },
}
});

const wishSlice = createSlice({
  name: 'wishes',
  initialState: wishInitialState,
  reducers: {
    addWish: (state, action) => {
      state.wishes.push(action.payload);
      const token=localStorage.getItem('token');
      if(token){
        const add=async()=>{
          await axios.post('url',
            JSON.stringify(action.payload),
            {headers:{Authorization:`Bearer ${token}`}},
          )
        };
        add();
    }else{
      localStorage.setItem('wishes', JSON.stringify(state.wishes));
    }
  }
}});

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    wishes: wishSlice.reducer,
  },
});


const { addTask, deleteTask,updateTask,finishTask } = taskSlice.actions;
 const {addWish} =wishSlice.actions;
 export { addTask, deleteTask,updateTask,finishTask,addWish };
export default store;


