import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, SetStateAction } from "react"
import { message } from "antd";
import './SignUp.css'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm,setPasswordConfirm]=useState('')
    const [emailError,setEmailError]=useState('')
    const [passwordError,setPasswordError]=useState('')
    const [confirmError,setConfirmError]=useState('')
    const [verificationCode, setVerificationCode] = useState('');
    const [verifyError,setVerifyError]=useState('')
    const [countdown, setCountdown] = useState(60);
    const [isSending, setIsSending] = useState(false);
    const [isRememberMe, setIsRememberMe] = useState(false);
    const navigate=useNavigate()
  
    //发送验证码
    const handleSendVerificationCode = async () => {
      if (!isValidEmail) {
        return;
      }
  
      setIsSending(true);
  
      try {
        const response = await axios.post('/api/sendVerificationCode', JSON.stringify({email: email}));
        if(response.status==401){
          setVerifyError('邮箱已注册')
          setIsSending(false)
        }else if(response.status==500){
          setVerifyError('邮箱错误')
          setIsSending(false)
        }
        const intervalNum = setInterval(() => {
          setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
  
        setTimeout(() => {
          clearInterval(intervalNum);
          setIsSending(false);
          setCountdown(60);
        }, 60000);
      } catch (error) {
        console.error(error);
      }
    };
  
    //点击注册
    const handleRegister = async () => {
      if(!emailError||!passwordError||!confirmError){
        return
      }
      try {
        const response = await axios.post('/api/register', { email, password, verificationCode });
        if (response.data.token) {
          // 注册成功，跳转到主页面

          if (isRememberMe){
          localStorage.setItem('token', response.data.token);
          }else{
            sessionStorage.setItem('token',response.data.token)
          }
          navigate('/Home')
          message.success("注册成功")
        } else {
          // 注册失败，提示验证码错误
          setVerifyError('验证码错误');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const isValidEmail = (e: { target: { value: SetStateAction<string> }} ) => {
      // 简单的邮箱格式验证
      setEmail(e.target.value)
      const emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if ( emailRegex.test(email)){
        setEmailError('')
        return true
      }else{
        setEmailError('邮箱格式不正确')
        return false
      }
    };
  
    const isValidPassword = (e: { target: { value: SetStateAction<string> }} ) => {
      // 简单的密码格式验证，可根据实际需求调整
      setPassword(e.target.value)
      const passwordRegex=/^.{6,}$/
      if ( passwordRegex.test(password)){
        setPasswordError('')
        return true
      }else{
        setPasswordError('密码需至少为6位字符')
        return false
      }
    };


    const handlePasswordConfirm=( e: { target: { value: SetStateAction<string> } })=>{
     setPasswordConfirm(e.target.value)
        if(passwordConfirm!=password){
            setConfirmError("密码不一致") 
            return false
        }else{
            setConfirmError("")
            return true
        }
    }
    return (
      <div className="SignUp">
        <p  id='Welcome'>欢迎注册</p>
        <div className='InputInfo'> 
        <input
          type="email"
          placeholder="邮箱"
          value={email}
          onChange={isValidEmail}
        />
        <p>666{emailError&&<p>{emailError}</p>}</p>
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={isValidPassword}
        />
        <p>{passwordError&&<p>{passwordError}</p>}</p>
        <input type="text" placeholder="密码确认"  value={passwordConfirm} onChange={handlePasswordConfirm} />
        <p>{confirmError&&<p>{confirmError}</p>}</p>
        <input
          type="text"
          placeholder="验证码"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        </div>
        <button id='SendCodeBtn' onClick={handleSendVerificationCode} disabled={isSending}>
          {isSending? `${countdown} 秒后重新发送` : '发送验证码'}
        </button>
        <p>{verifyError&&<p>{verifyError}</p>}</p>
        {/* <div className='isRemember'><label htmlFor="Remember" id='RememberLabel'> <input type="checkbox" id='Remember' checked={isRememberMe} onChange={() => setIsRememberMe(!isRememberMe)} />记住我</label></div> */}
        <label htmlFor="Remember" id='RememberLabel'> <input type="checkbox" id='Remember' checked={isRememberMe} onChange={() => setIsRememberMe(!isRememberMe)} />记住我</label>
        <button id='SIgnUpBTn'onClick={handleRegister}>注册</button>
        <button id='SIgnUpBTn'onClick={handleRegister}>注册</button>
        <button id='toLogin'>已有账号？去登录</button>
      </div>
    );
  };
  
  export default SignUp;