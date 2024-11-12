
import axios from 'axios';
import './WishList.css'
import {useEffect} from "react";
import { useState } from "react";
import Wish from '../../components/Wish';
import { useDispatch } from "react-redux";
import { addWish } from "../../Store.ts";
import { useNavigate } from "react-router-dom";

interface ShareWish {
  id:string;
  event:string;
  is_cycle:boolean;
  description:string;
  is_shared:boolean;
  view:number;
}
interface Wish {
  id:string;
  event:string;
  is_cycle:boolean;
  description:string;
  is_shared:boolean;
}
//因为服务器故障，无法从后端获取，暂时先写定一些数据
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wishList, setWishList] = useState(ShareWishList);
  // const [showDetail, setShowDetail] = useState(false);
  const [isCycle, setIsCycle] = useState(false);

  const ShowDetail = (index:number) => {
    const speceficWish = document.getElementById(`detailWish-${index}`) as HTMLDivElement;
    if(speceficWish){
      speceficWish.style.display = 'block';
    }
  }
  const HideDetail = () => {

    const HiddenWish=document.querySelectorAll('.Wishlist-addWishMenu');
    for(let i=0;i<HiddenWish.length;i++){
      // HiddenWish[i].style.display='none';
      const hiddenElement = HiddenWish[i] as HTMLElement; // 将Element类型断言为HTMLElement
        hiddenElement.style.display = 'none';
    }
  }


    useEffect(() => {
      const getShareWishData=async ()=>{
        const response=await axios.get('url');
        setWishList(JSON.parse( response.data));
      }
      getShareWishData();
    }, [])
    const handleSubmit = (index:number) => {
         const newWish:Wish={id:'',
          event:wishList[index].event,
          is_cycle:isCycle,
          description:wishList[index].description,
          is_shared:true,
          };
          dispatch(addWish(newWish))
          navigate('/Home')
    }
    return(
        <div className='WishList'>
             <button className='WishListBack' onClick={() => {()=>navigate('/Home')}}></button>
             <div className='Wish-grid'>
                 {wishList.map((item, index) => (
                     <div key={index} className='Wish-item' onClick={() => ShowDetail(index)}>
                         {item.event}---
                         {item.description}
                         (最近有{item.view}人看过)

                         <div className='Wishlist-addWishMenu' id={`detailWish-${index}`}>
                          <button id="closeDetail" onClick={() => HideDetail()}></button>
                        <div id='detailWishName'>{item.event}</div>
                        <div id='detailRectangle'>——————————————</div>
                        <div  id='detailWishDescription'>{item.description}</div>
                        <div id='detail-setWishCycle'>
                        <button id='isShareWishCycle' onClick={()=>setIsCycle(!isCycle)}></button>
                        {isCycle&&<button id='ShareWishCycle' onClick={()=>setIsCycle(!isCycle)}></button>}
                        </div>
                        <button onClick={() =>handleSubmit } id='detail-addWishButton'></button></div>
                    </div>
              


                 ))}          
             </div>
        </div>
    )
  }
export default WishList;
