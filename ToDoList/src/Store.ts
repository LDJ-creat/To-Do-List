import axios from 'axios'
interface Task {
    id: number;
    name: string;
    description: string;
    isCompleted: boolean;
    isRecycle: boolean;
  }

  import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';




interface TaskState {
  tasks: Task[];
}

interface WishState{
  wishes: Task[];
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
      const newTasks:Task[]=[]
      for (let i=0;i<state.tasks.length;i++){
        newTasks.push({id:i,
          name:state.tasks[i].name,
          description:state.tasks[i].description,            
          isCompleted:state.tasks[i].isCompleted,
          isRecycle:state.tasks[i].isRecycle})
      }
      state.tasks=newTasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      
    },
    deleteTask:(state, action)=>{
        state.tasks.splice(action.payload, 1);
        // state.tasks.map((item,index)=>{
        //   item.id=index;
        // })
        const newTasks:Task[]=[]
        for (let i=0;i<state.tasks.length;i++){
          newTasks.push({id:i,
            name:state.tasks[i].name,
            description:state.tasks[i].description,            
            isCompleted:state.tasks[i].isCompleted,
            isRecycle:state.tasks[i].isRecycle})
        }
        state.tasks=newTasks;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));

    },
    updateTask:(state, action)=>{//
        state.tasks=action.payload;
        // state.tasks.map((item,index)=>{
        //   item.id=index;
        // })
        const newTasks:Task[]=[]
        for (let i=0;i<state.tasks.length;i++){
          newTasks.push({id:i,
            name:state.tasks[i].name,
            description:state.tasks[i].description,            
            isCompleted:state.tasks[i].isCompleted,
            isRecycle:state.tasks[i].isRecycle})
        }
        state.tasks=newTasks;
        
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    finishTask:(state, action)=>{
      state.tasks[action.payload].isCompleted=true;
      const token=localStorage.getItem('token');
      if(token){
        const finish=async()=>{
          await axios.post('url',
            state.tasks,
            {headers:{Authorization:`Bearer${token}`}},
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
    }
  }
});

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    wishes: wishSlice.reducer,
  },
});


export const { addTask, deleteTask,updateTask,finishTask } = taskSlice.actions;
export const {addWish} =wishSlice.actions;
export default store;


