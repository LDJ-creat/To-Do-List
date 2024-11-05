import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, SetStateAction } from "react"
import { message } from "antd";


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
    const navigate=useNavigate()
  
    //发送验证码
    const handleSendVerificationCode = async () => {
      if (!isValidEmail ||!isValidPassword) {
        return;
      }
  
      setIsSending(true);
  
      try {
        await axios.post('/api/sendVerificationCode', { email });
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
      try {
        const response = await axios.post('/api/register', { email, password, verificationCode });
        if (response.data.token) {
          // 注册成功，跳转到主页面
          localStorage.setItem('token', response.data.token);
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
      }
    };


    // const [passwordConfirm,setPasswordConfirm]=useState('')
    // const [confirmError,setConfirmError]=useState('')
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
      <div>
        <input
          type="email"
          placeholder="邮箱"
          value={email}
          onChange={isValidEmail}
        />
        {emailError&&<p>{emailError}</p>}
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={isValidPassword}
        />
        {passwordError&&<p>{passwordError}</p>}
        <input type="text" placeholder="密码确认"  value={passwordConfirm} onChange={handlePasswordConfirm} />
        {confirmError&&<p>{confirmError}</p>}
        <input
          type="text"
          placeholder="验证码"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <button onClick={handleSendVerificationCode} disabled={isSending}>
          {isSending? `${countdown} 秒后重新发送` : '发送验证码'}
        </button>
        {verifyError&&<p>{verifyError}</p>}
        <button onClick={handleRegister}>注册</button>
      </div>
    );
  };
  
  export default SignUp;