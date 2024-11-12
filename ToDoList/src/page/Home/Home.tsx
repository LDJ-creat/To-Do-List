import { Outlet, useNavigate, } from "react-router-dom"
import { useState } from "react"
import SettingNav from "../../components/setting-nav.tsx"
import './Home.css'
import Decoration1 from '../../images/FinishTaskDecoration1.svg'
import Decoration2 from '../../images/FinishTaskDecoration2.svg'
import FooterDor1 from '../../images/FooterDecoration1.svg'
import FooterDor2 from '../../images/FooterDecoration2.svg'
import AddTask from "../../components/addTask.tsx"
import Wish from "../../components/Wish.tsx"
import { useSelector } from "react-redux"


const Home=()=>{
    let tasks = useSelector((state: any) => state.tasks.tasks);
    const navigate=useNavigate()
    const [settingNav,setSettingNav]=useState(false)

    const handleAddTaskMenu=()=>{

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

    }

    const handleWishMenu=()=>{
        const addWishMenu=document.getElementById ('wishMenu')
        const HomeBackground=document.getElementById ('Pisa')
        const PieChart=document.getElementById ('PieChart')
        if(addWishMenu){
        addWishMenu.style.display='block'
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
                        
                        {tasks.map((task:any,index:number)=>()=>{
                             return task.completed ? (
                                <div key={index} id='taskContent'>
                                    <span id='taskName'>{task.event}</span>
                                    <span id='taskDate'>{task.description}</span>
                                </div>
                            ) : null;
                        })}
                            
                            
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
                    </div>
                <Outlet />
                
                {settingNav && <SettingNav />}
                <AddTask />
                <Wish />
               
                            
        </div>
        
    )
}
export default  Home