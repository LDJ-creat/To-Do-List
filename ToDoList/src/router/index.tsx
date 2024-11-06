import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/SignUp/SignUp.tsx";
import Login from  "../page/Login/Login.tsx";
import Home from "../page/Home/Home.tsx"
import Image from "../components/Image.tsx";
import List from "../components/List.tsx";
import NotFound from "../page/NotFound/NotFound.tsx"; 
import StartPage from "../page/StartPage/StartPage.tsx";
import AddTask from "../components/addTask.tsx";

// const token=localStorage.getItem('token')
const router=createBrowserRouter([
{
      path: '/',
      element:<StartPage/>,// 要指定一个默认页面路径
},
{
    path:'/Login',
    element:<Login/>
},
{
   path:'/SignUp',
   element:<SignUp/>
},
{
   path:'/Home',
   element:<Home/>,
   children:[
      {
         path:"",
         element:<Image/>
      },
      {
         path:'list',
         element:<List/>
      }
   ]
},
{
   path:'*',
   element:<NotFound/>
},
{
   path:'/List',
   element:<List/>
},
{
   path:'/addTask',
   element:<AddTask/>
}
])

export default router