
import axios from 'axios';
import './WishList.css'
import {useEffect} from "react";
import { useState } from "react";
import Wish from '../../components/Wish';
import { useDispatch } from "react-redux";
import { addWish } from "../../Store.ts";

interface ShareWish {
  id:string;
  event:string;
  is_cycle:boolean;
  description:string;
  is_shared:boolean;
  view:number;
}

//因为服务器故障，暂时先写定一些数据
let ShareWishList:ShareWish[] = [
  {id:'1',event:'走出',is_cycle:false,description:'春节快乐！',is_shared:true,view:100},
  {id:'2',event:'2022夏天',is_cycle:false,description:'夏天快乐！',is_shared:true,view:100},
  {id:'3',event:'2022秋天',is_cycle:false,description:'秋天快乐！',is_shared:true,view:100},
  {id:'4',event:'2022冬天',is_cycle:false,description:'冬天快乐！',is_shared:true,view:100,},
  {id:'5',event:'2023春节',is_cycle:false,description:'2023春节快乐！',is_shared:true,view:100},
  {id:'6',event:'2023夏天',is_cycle:false,description:'2023夏天快乐！',is_shared:true,view:100},
  {id:'7',event:'2023秋天',is_cycle:false,description:'2023秋天快乐！',is_shared:true, view:100},
  {id:'8',event:'2023冬天',is_cycle:false,description:'2023冬天快乐！',is_shared:true,view:100},
  {id:'9',event:'2024春节',is_cycle:false,description:'2024春节快乐！',is_shared:true,view:100},
  {id:'10',event:'2024夏天',is_cycle:false,description:'2024夏天快乐！',is_shared:true,view:100},
];
const WishList = () => {
  const [wishList, setWishList] = useState(ShareWishList);
  const [showDetail, setShowDetail] = useState(false);
  const [isCycle, setIsCycle] = useState(false);
    useEffect(() => {
      const getShareWishData=async ()=>{
        const response=await axios.get('url');
        setWishList(JSON.parse( response.data));
      }
      getShareWishData();
    }, [])
    const handleSubmit = () => {

    }
    return(
        <div className='WishList'>
             <button className='WishListBack'></button>
             <div className='Wish-grid'>
                 {wishList.map((item, index) => (
                     <div key={index} className='Wish-item' onClick={() => {setShowDetail(true)}}>
                         {item.event}---
                         {item.description}
                         (最近有{item.view}人看过)
                         {showDetail&&<div id='Wishlist-addWishMenu' onClick={() => {setShowDetail(false)}}>  
                          <button id="closeDetail"></button>
                        <div id='detailWishName'>{item.event}</div>
                        <div id='detailRectangle'>——————————————</div>
                        <div  id='detailWishDescription'>{item.description}</div>
                        <div id='detail-setWishCycle'>
                        <button id='isWishCycle' onClick={()=>setIsCycle(!isCycle)}></button>
                        {isCycle&&<button id='WishCycle' onClick={()=>setIsCycle(!isCycle)}></button>}
                        </div>
                        <button onClick={handleSubmit} id='detail-addWishButton'></button></div>}
                    </div>
              // </div>


                 ))}          
             </div>
        </div>
    )
}
export default WishList;
// import React from 'react';

// interface Task {
//     id: number;
//     title: string;
//     description: string;
//   }
// const TaskList: React.FC = () => {
//   const tasks: Task[] = [
//     { id: 1, title: 'Task 1', description: 'This is task 1 description.' },
//     { id: 2, title: 'Task 2', description: 'A longer description for task 2.' },
//     { id: 3, title: 'Task 3', description: 'A third task description.' },
//     // { id: 3, title: 'Task 4', description: 'A fourth task description.A fourth task descriptionA fourth task descriptionA fourth task description grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr);' },
//  { id: 4, title: 'Task 4', description: 'A fourth task description.A fourth task descriptionA fourth task descriptionA fourth task description grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr);' },
// //  { id: 5, title: 'Task 5A fourth task description', description: 'A fifth task description.' },
// //  { id: 6, title: 'Task 6', description: 'A sixth task description.' },
// //  { id: 7, title: 'Task 7', description: 'A seventh task description.' },
//     // 添加更多任务
//   ];

//   return (
//     <div className="task-grid">
//       {tasks.map(task => (
//         <div key={task.id} className="task-item">
//           <h3>{task.title}</h3>
//           {task.description}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;
