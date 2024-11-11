import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/SignUp/SignUp.tsx";
import Login from  "../page/Login/Login.tsx";
import Home from "../page/Home/Home.tsx"
import PieChart from "../components/PieChart.tsx";
// import List from "../components/List.tsx";
import List from "../page/List/List.tsx";
import NotFound from "../page/NotFound/NotFound.tsx"; 
import StartPage from "../page/StartPage/StartPage.tsx";
import AddTask from "../components/addTask.tsx";
import Wish from "../components/Wish.tsx";
import RandomWish from "../page/RandomWish/RandomWish.tsx";
import Account from "../page/Account/Account.tsx";
import FinishChoose from "../page/FinishChoose/FinishChoose.tsx";
import MyWish from "../page/MyWish/MyWish.tsx";
import AddWish from "../components/addWish.tsx";
import WishList from "../page/WishList/WishList.tsx";
import Setting from "../page/Setting/Setting.tsx";
import ModifyPassword from "../page/ModifyPassword/ModifyPassword..tsx";
import SettingNav from "../components/setting-nav.tsx";
import FinishRecord from "../page/Finish-record/Finish-record.tsx";
// import AddTask from "../components/addTask.tsx";
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
         element:<PieChart/>
      },
      {
         path:'list',
         element:<List/>
      }
   ]
},
// {
//    path:'/rehome',
//    element:<Home/>,
//    children:[
//       {
//          path:"",
//          element:<PieChart/>
//       }]
// },
{
   path:'*',
   element:<NotFound/>
},
{
   path:'/list',
   element:<List/>
},
{
   path:'/addTask',
   element:<AddTask/>
},
{
   path:'/WishMenu',
   element:<Wish/>
},
{
   path:'/account',
   element:<Account/>
},
{
   path:'/randomWish',
   element:<RandomWish/>
},
{
   path:'/finishChoose',
   element:<FinishChoose/>
},
{
   path:'/myWish',
   element:<MyWish/>
},
{
   path:'/addWish',
   element:<AddWish/>
},
{
   path:'/wishList',
   element:<WishList/>
},
{
   path:'/setting',
   element:<Setting/>
},
{
   path:'/modifyPassword',
   element:<ModifyPassword/>
},
{
   path:'/settingNav',
   element:<SettingNav/>
},
{
   path:'/finishRecord',
   element:<FinishRecord/>
}
])

export default router