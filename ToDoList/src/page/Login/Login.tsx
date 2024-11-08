import { useNavigate } from "react-router-dom"
import {useState} from 'react'
import axios from 'axios'
import { message } from "antd"
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
        <div className='SignUp'>
             
      <input
        type="email"
        placeholder="邮箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登录</button>
      <p>{errorMessage && <p>{errorMessage}</p>}</p>
      <input type="checkbox" id="remember" checked={isRememberMe} onChange={()=>setIsRememberMe(!isRememberMe)} />
      <label htmlFor="remember">记住我</label>
      <p>还没有账号？<a href="../SignUp/SignUp.tsx">注册一个</a></p>
        
        </div>
    )
}
export default  Login