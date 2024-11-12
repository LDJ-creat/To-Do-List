import './FinishChoose.css'
import FinishChooseImg from '../../images/心愿卡正面（底）.svg'
import { useState,useEffect } from'react';
import { useDispatch } from "react-redux";
import { addWish } from "../../Store.ts";
import { useNavigate } from "react-router-dom";


interface Wish {
    id:string;
    event:string;
    is_cycle:boolean;
    description:string;
    is_shared:boolean;
}

//服务器异常，同样先暂时写定一些数据
const wishList:Wish[] = [
    {id:'1',event:'吃饭',is_cycle:false,description:'去吃饭',is_shared:true},
    {id:'2',event:'看电影',is_cycle:false,description:'去看电影',is_shared:true},
    {id:'3',event:'旅游',is_cycle:false,description:'去旅游',is_shared:true},
    {id:'4',event:'学习',is_cycle:false,description:'学习英语',is_shared:true},
    {id:'5',event:'打篮球',is_cycle:true,description:'每周打一次篮球',is_shared:true},
    {id:'6',event:'跑步',is_cycle:true,description:'每周跑一次步',is_shared:true},
    {id:'7',event:'写作',is_cycle:true,description:'每周写一篇文章',is_shared:true},
    {id:'8',event:'运动',is_cycle:true,description:'每周锻炼一次',is_shared:true},
    {id:'9',event:'看书',is_cycle:true,description:'每周看一本书',is_shared:true},
    {id:'10',event:'看电视',is_cycle:true,description:'每周看一集电视',is_shared:true},
]

const FinishChoose = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [randomWishValue, setRandomWishValue] = useState('');
    const [randomdescription, setRandomWishDescription] = useState('');
    const getRandomWish =async () => {
        const randomNum=Math.floor(Math.random()*10);
        setRandomWishValue(wishList[randomNum].event);
        setRandomWishDescription(wishList[randomNum].description);//暂时应急用
    };
    useEffect(()=>{
        getRandomWish();
        
           
    },[])



    const handleAdd = () => {
        const newWish:Wish={
            id:Date.now().toString(),
            event:randomWishValue,
            is_cycle:false,
            description:randomdescription,
            is_shared:true,
            };
            dispatch(addWish(newWish))
            navigate('/Home')
    }
    return(
        <div className='FinishChoose'>
            <img  id='FinishChooseImg'src={FinishChooseImg} alt="" />
            <div className="resultName" >{randomWishValue}</div>
            <div className='result'>{randomdescription}</div>
            <button className='again' onClick={()=>getRandomWish()}>重抽</button>
            <button className='confirmAdd' onClick={handleAdd}>添加</button>
        </div>
    )
}
export default FinishChoose;