import { useState } from 'react'
import LogoSvg from '../../images/logo.svg'
import './Account.css'

const Account = () => {
    const [AccountConfirm, setAccountConfirm]=useState(false)
    // const handleAccountConfirm = () => {
    //     if(!AccountConfirm){
    // }
    return(
        <div className="Account">
    <img src={LogoSvg} alt="logo" />
    <div className="product-name">PIZZA LIST</div>
    <div id='Account-Menu'>
        <button id='Account-Login'>账号登录</button>
        <button id='Account-Register'> 注册账户</button>
        <button id='Account-Agreement' onClick={()=>setAccountConfirm(!AccountConfirm)}></button>
        {AccountConfirm && <button id='Account-Agreement-Confirm' onClick={()=>setAccountConfirm(!AccountConfirm)}></button>}
    </div>
  </div>
    )
}
export default Account