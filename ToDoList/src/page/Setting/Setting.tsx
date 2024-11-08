import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Setting = () => { 
    const navigate = useNavigate()
    const [isQuit, setIsQuit]=useState(false)
    const Quit=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('tasks')
        navigate('/')
    }
    return(
        <div>
            <button>登录</button>
            <button>注册</button>
            <button onClick={()=>setIsQuit(true)}>退出</button>
            <button>关于</button>
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