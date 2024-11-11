import { useState } from 'react'
import LogoSvg from '../../images/logo.svg'
import './Account.css'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'

const Account = () => {
    const [AccountConfirm, setAccountConfirm]=useState(false)
    // const handleAccountConfirm = () => {
    //     if(!AccountConfirm){
    // }
    // const [isLogin, setIsLogin] = useState(false)
    // const [isSignUp, setIsSignUp] = useState(false)

    const handleLogin = () => {
        if(AccountConfirm){
        const login = document.getElementById('Login')
        const AccountBackground=document.getElementById('Account')
        if(login){
            login.style.display = 'block'
        }
        if(AccountBackground){
            AccountBackground.style.filter='blur(5px)'
        }
        
        }else{
            alert("请阅读并同意协议")
        }
    }
    const handleSignUp = () => {
        if(AccountConfirm){
        const signUp = document.getElementById('SignUp')
        const AccountBackground=document.getElementById('Account')
        if(signUp){
            signUp.style.display = 'block'
        }
        if(AccountBackground){
            AccountBackground.style.filter='blur(5px)'
        }    
        }else{
            alert("请阅读并同意协议")
        }
    }
    return(
    <div>
    <div id="Account">
    <img src={LogoSvg} alt="logo" />
    <div className="product-name">PIZZA LIST</div>
    <div id='Account-Menu'>
        <button id='Account-Login' onClick={handleLogin}>账号登录</button>
        <button id='Account-Register'onClick={handleSignUp}> 注册账户</button>
        <button id='Account-Agreement' onClick={()=>setAccountConfirm(!AccountConfirm)}></button>
        {AccountConfirm && <button id='Account-Agreement-Confirm' onClick={()=>setAccountConfirm(!AccountConfirm)}></button>}
       
    </div>
    </div>
    <Login />
    <SignUp />
    </div>
    )
}
export default Account