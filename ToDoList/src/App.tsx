import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch} from'react-redux'
import { updateTask } from './Store';

function App() {
  useEffect(() => {
      const dispatch=useDispatch(); 
      const token=localStorage.getItem('token');
      if(token){
        const initialize=async()=>{
          const response = await axios.get('url',{headers:{Authorization:`Bearer${token}`}})
          dispatch(updateTask(response.data))//用async好还是不用好
        };
        initialize(); 
    }else{
      const initialize=JSON.parse(localStorage.getItem('tasks') as string) || []
      dispatch(updateTask(initialize))
    }
    
  },[])

  return (
    
    <div></div>
  )
}

export default App
