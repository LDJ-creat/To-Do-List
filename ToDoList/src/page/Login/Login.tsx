import { useNavigate } from "react-router-dom"
import {useState} from 'react'
import axios from 'axios'
import { message } from "antd"
const Login=()=>{
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('/api/login', { email, password });
        if (response.data.token) {
          // 登录成功，跳转到主页面
          localStorage.setItem('token', response.data.token)
          navigate('/Home')
          message.success("登录成功")
        } else {
          // 登录失败，显示错误信息
          setErrorMessage('邮箱或密码错误');
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('邮箱或密码错误');
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
      {errorMessage && <p>{errorMessage}</p>}
            {/* <form action="">
                <input type="text" placeholder="邮箱" />
                <input type="text" placeholder="密码"/>
                <button onClick={()=> navigate('/Home')}>登录</button>
            </form> */}
        </div>
    )
}
export default  Login