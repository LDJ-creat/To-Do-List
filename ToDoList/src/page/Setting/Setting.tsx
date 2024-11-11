import { useState ,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import "./Setting.css"
import Component4 from "../../images/Component 4.svg"
import Arrow from "../../images/箭头.svg"
import axios from "axios"

const Setting = () => { 
    const navigate = useNavigate()
    const [isQuit, setIsQuit]=useState(false)
    const Quit=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('tasks')
        navigate('/')
    }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const getUserEmail = async () => {
                const response = await axios.get('http://localhost:3001/getUserEmail',{headers: {Authorization: `Bearer ${token}`}})
                const email = response.data.email
                const personalEmail = document.querySelector('.personal-email')
                if(personalEmail){
                personalEmail.textContent = `邮箱：${email}`
                }
            }
            getUserEmail()
                  
        }
    }, [])
    const handleQuit = () => {
        const token = localStorage.getItem('token')
        if(token){
            localStorage.removeItem('token')
            // localStorage.removeItem('tasks')
            navigate('/')
        }else{
            alert('请先登录')
        }
    }

    const handleDeleteAccount = () => {
        const token = localStorage.getItem('token')
        if(token){
            const deleteAccount = async () => {
                const response = await axios.delete('http://localhost:3001/deleteAccount',{headers: {Authorization: `Bearer ${token}`}})
                if(response.status === 200){
                    alert('账号已注销')
                    localStorage.removeItem('token')
                    navigate('/')
                }
                else{
                    alert('注销失败')
                }
        }
        deleteAccount()
    }else{
            alert('请先登录')
        }
        
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
            
            <button onClick={()=>navigate('/account')}>登录/注册</button>
            <img src={Arrow} alt="" className="Arrow01"/>
            <button onClick={handleQuit}>退出登录</button>
            <img src={Component4} alt=""  className="Icon402"/>
            <button onClick={handleDeleteAccount}> 注销账号</button>
            <img src={Arrow} alt=""  className="Arrow02"/>
            <button onClick={()=>alert('敬请期待')}>关于我们</button>
            <img src={Component4} alt=""  className="Icon403"/>
            {/* {isQuit && <div>
                <p>确定退出?</p>
                <button onClick={Quit}>确定</button>
                <button onClick={()=>setIsQuit(false)}>取消</button>
                </div>
            } */}
        </div>
    )
}
export default Setting