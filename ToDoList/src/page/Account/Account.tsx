import LogoSvg from '../../images/logo.svg'
import './Account.css'

const Account = () => {
    return(
        <div className="Account">
    <img src={LogoSvg} alt="logo" />
    <div className="product-name">PIZZA LIST</div>
    <div id='Account-Menu'>
        <button id='Account-Login'>账号登录</button>
        <button id='Account-Register'> 注册账户</button>
    </div>
  </div>
    )
}
export default Account