import { Outlet, useNavigate } from "react-router-dom"
import './Home.css'
import Decoration1 from '../../images/FinishTaskDecoration1.svg'
import Decoration2 from '../../images/FinishTaskDecoration2.svg'
import FooterDor1 from '../../images/FooterDecoration1.svg'
import FooterDor2 from '../../images/FooterDecoration2.svg'
import listIcon from '../../images/Component 2.png'
import chartIcon from '../../images/Component 3.svg'
import wishesIcon from '../../images/Component 4.svg'
const Home=()=>{
    const navigate=useNavigate()
    return(
        <div className='Home'>
                <div id='Pisa'>
                    <div id='Setting'></div>
                    <div id='FinishTasks'>
                        <img src={Decoration1} alt="Decoration1" id='Decoration1' />
                        <img src={Decoration2} alt="Decoration2" id='Decoration2' />
                        <div id='Content'>
                            <span id='headContent'>今天完成了</span>
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            
                        </div>
                    </div>
                    <div id='add'></div>
                    <div id='footer'>
                        <img src={FooterDor1} alt="FooterDor1" id='FooterDor1' />
                        <img src={FooterDor2} alt="FooterDor2" id='FooterDor2' />
                        <img src={listIcon} alt="listIcon" id='listIcon' />
                        <img src={chartIcon} alt="chartIcon" id='chartIcon' />
                        <img src={wishesIcon} alt="wishesIcon" id='wishesIcon'/>
                        <span id='list'>清单</span>
                        <span id='wishes'>心愿</span>
                    </div>
                </div>
            
            <Outlet/>
        </div>
    )
}
export default  Home