import { Outlet, useNavigate, } from "react-router-dom"
import { useState } from "react"
import { createRef } from "react"
import SettingNav from "../../components/setting-nav.tsx"
import './Home.css'
import Decoration1 from '../../images/FinishTaskDecoration1.svg'
import Decoration2 from '../../images/FinishTaskDecoration2.svg'
import FooterDor1 from '../../images/FooterDecoration1.svg'
import FooterDor2 from '../../images/FooterDecoration2.svg'
import AddTask from "../../components/addTask.tsx"
// import AddWish from "../../components/addWish.tsx"
import Wish from "../../components/Wish.tsx"


const Home=()=>{
    const addMenuRef=createRef()
    const navigate=useNavigate()
    const [settingNav,setSettingNav]=useState(false)
    // const handleAddTaskBt=()=>{
        
    // }
    // const [addTaskMenuApprear,setAddTaskMenuApprear]=useState(false)
    const handleAddTaskMenu=()=>{
        // setAddTaskMenuApprear(!addTaskMenuApprear)
        const addTaskMenu=document.getElementById ('addTaskMenu')
        const HomeBackground=document.getElementById ('Pisa')
        const PieChart=document.getElementById ('PieChart')
        if(addTaskMenu){
        addTaskMenu.style.display='block'
        addTaskMenu.style.zIndex= '1000';
        }
        if(HomeBackground){
        HomeBackground.style.filter='blur(10px)'
        }
        if(PieChart){
        PieChart.style.filter='blur(20px)'
        }
        // if (addMenuRef.current) {
        //     addMenuRef.current.style.display = 'block';
        // }
    }

    const handleWishMenu=()=>{
        const addWishMenu=document.getElementById ('wishMenu')
        const HomeBackground=document.getElementById ('Pisa')
        const PieChart=document.getElementById ('PieChart')
        if(addWishMenu){
        addWishMenu.style.display='block'
        // addWishMenu.style.display='flex'
        addWishMenu.style.zIndex= '1000';
        }
        if(HomeBackground){
        HomeBackground.style.filter='blur(10px)'
        }
        if(PieChart){
        PieChart.style.filter='blur(20px)'
        }
    }

    const handleSettingNav=()=>{
        // const settingNav=document.getElementById ('setting-nav')
        // if(settingNav){
        // settingNav.style.display='block'
        // }
       setSettingNav(!settingNav)

    }
    return(

        <div className='Home'>
                
                <div id='Pisa'>
                    <button id='HomeSetting' onClick={handleSettingNav}></button>
                    <div id='FinishTasks'>
                        <img src={Decoration1} alt="Decoration1" id='Decoration1' />
                        <img src={Decoration2} alt="Decoration2" id='Decoration2' />
                        <div id='Content'>
                            <span id='headContent'>今天完成了</span>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            
                        </div>
                    </div>
                    <button id='add' onClick={handleAddTaskMenu}></button>
                    <div id='footer'>
                        <img src={FooterDor1} alt="FooterDor1" id='FooterDor1' />
                        <img src={FooterDor2} alt="FooterDor2" id='FooterDor2' />
                        <button id='listIcon' onClick={()=>navigate('/list')}></button>
                        <button  id='chartIcon' ></button>
                        <button id='wishesIcon' onClick={handleWishMenu}></button>
                        <span id='list'>清单</span>
                        <span id='wishes' >心愿</span>
                    </div>
                    {/* <AddTask/> */}
                </div>
                <Outlet />
                
                {settingNav && <SettingNav />}
                <AddTask />
                <Wish />
               
                            
        </div>
        
    )
}
export default  Home