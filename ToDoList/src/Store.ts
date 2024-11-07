interface Task {
    id: number;
    name: string;
    description: string;
  }

  import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';




interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
    tasks: JSON.parse(localStorage.getItem('tasks') as string) || [],
  };
  

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
      
    },
    deleteTask:(state, action)=>{
        state.tasks.splice(action.payload, 1);
        localStorage.setItem('tasks', JSON.stringify(state.tasks));

    },
    updateTask:(state, action)=>{
        state.tasks=action.payload;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
}
});

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
  },
});


export const { addTask, deleteTask,updateTask } = taskSlice.actions;
export default store;