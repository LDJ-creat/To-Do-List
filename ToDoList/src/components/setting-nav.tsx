import './setting-nav.css'
import { useNavigate } from 'react-router-dom';

const SettingNav = () => {
    const navigate = useNavigate();
    const handleFinishRecord = () => {
        const settingNav = document.getElementById('setting-nav');
        if (settingNav) {
        settingNav.style.display = 'none';
        navigate('/finishRecord');
        }
    }
    const handlePersonalCenter = () => {
        navigate('/setting');
    }
    return (
        <div id="setting-nav">  
        <button id="finishRecord" onClick={handleFinishRecord}>完成记录</button>
        <p id='setting-nav-Rectangle'>————</p>
        <button id="personal-center"onClick={handlePersonalCenter}>个人中心</button> 
        </div>
    )
}
export default SettingNav;