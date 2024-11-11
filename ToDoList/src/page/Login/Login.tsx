import { useNavigate } from "react-router-dom"
import {useState} from 'react'
import axios from 'axios'
import { message } from "antd"
import './Login.css'
const Login=()=>{
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isRememberMe, setIsRememberMe] = useState(false);

    const handleLogin = async () => {
      try {
        const data=JSON.stringify({email: email, password: password})
        const response = await axios.post('/api/login', data );
        if (response.data.content.token) {
          // 登录成功，跳转到主页面
          if (isRememberMe) {
          localStorage.setItem('token', response.data.token)
          }else{
            sessionStorage.setItem('token', response.data.token)
          }
          navigate('/Home')
          message.success("登录成功")
        } else {
          // 登录失败，显示错误信息
          if(response.status==400){
          setErrorMessage('该用户不存在');
          }else if(response.status==401){
          setErrorMessage('密码错误');
          }else{
          setErrorMessage('登录失败，请稍后再试');
          }
        }
      } catch (error) {
        console.error(error);
        
      }
    };
    return(
        <div className='Login'>
         <p className="welcomeLogin">欢迎登录</p>   
         <div className='InputIfo'> 
      <input
        type="email"
        id="email"
        placeholder="请输入邮箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
     
      <input
        type="password"
        id='password'
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p id="LoginError">{errorMessage && <p>{errorMessage}</p>}</p>
      <label htmlFor="remember" className="RememberLabel"><input type="checkbox" id="remember" checked={isRememberMe} onChange={()=>setIsRememberMe(!isRememberMe)} />记住我</label>
      {/* <label htmlFor="remember">记住我</label> */}
      </div>
      <button onClick={handleLogin} id='loginBtn'>登录</button>
      <button id='toRegister'>还没有账号？注册一个</button>
        
        </div>
    )
}
export default  Login