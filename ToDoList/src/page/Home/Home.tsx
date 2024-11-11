import { Outlet, useNavigate, } from "react-router-dom"
import { useState } from "react"
import { createRef } from "react"
import './Home.css'
import Decoration1 from '../../images/FinishTaskDecoration1.svg'
import Decoration2 from '../../images/FinishTaskDecoration2.svg'
import FooterDor1 from '../../images/FooterDecoration1.svg'
import FooterDor2 from '../../images/FooterDecoration2.svg'
import AddTask from "../../components/addTask.tsx"


const Home=()=>{
    const addMenuRef=createRef()
    // const navigate=useNavigate()
    // const handleAddTaskBt=()=>{
        
    // }
    // const [addTaskMenuApprear,setAddTaskMenuApprear]=useState(false)
    const handleAddTaskMenu=()=>{
        // setAddTaskMenuApprear(!addTaskMenuApprear)
        const addTaskMenu=document.getElementById ('addTaskMenu')
        if(addTaskMenu){
        addTaskMenu.style.display='block'
        }
        // if (addMenuRef.current) {
        //     addMenuRef.current.style.display = 'block';
        // }
    }
    return(

        <div className='Home'>
                
                <div id='Pisa'>
                    <button id='Setting'></button>
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
                        <button id='listIcon'></button>
                        <button  id='chartIcon' ></button>
                        <button id='wishesIcon'></button>
                        <span id='list'>清单</span>
                        <span id='wishes'>心愿</span>
                    </div>
                    {/* <AddTask/> */}
                </div>
                <Outlet />
                <AddTask />
               
                            
        </div>
        
    )
}
export default  Home