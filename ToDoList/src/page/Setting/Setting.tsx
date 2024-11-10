import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Setting.css"
import Component4 from "../../images/Component 4.svg"
import Arrow from "../../images/箭头.svg"

const Setting = () => { 
    const navigate = useNavigate()
    const [isQuit, setIsQuit]=useState(false)
    const Quit=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('tasks')
        navigate('/')
    }
    return(
        <div className="setting">
            {/* <img src={Component4} alt=""  className="Icon401"/>
            <img src={Component4} alt=""  className="Icon402"/>
            <img src={Component4} alt=""  className="Icon403"/>
            <img src={Arrow} alt="" className="Arrow01"/>
            <img src={Arrow} alt=""  className="Arrow02"/>
            */}
            <button className="personal-email">邮箱：</button>
            <img src={Component4} alt=""  className="Icon401"/>
            
            <button>登录/注册</button>
            <img src={Arrow} alt="" className="Arrow01"/>
            <button onClick={()=>setIsQuit(true)}>退出登录</button>
            <img src={Component4} alt=""  className="Icon402"/>
            <button> 注销账号</button>
            <img src={Arrow} alt=""  className="Arrow02"/>
            <button>关于我们</button>
            <img src={Component4} alt=""  className="Icon403"/>
            {isQuit && <div>
                <p>确定退出?</p>
                <button onClick={Quit}>确定</button>
                <button onClick={()=>setIsQuit(false)}>取消</button>
                </div>
            }
        </div>
    )
}
export default Setting