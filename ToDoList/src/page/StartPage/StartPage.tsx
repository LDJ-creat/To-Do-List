import { useNavigate } from "react-router-dom"
import {useEffect} from "react";
const StartPage = () => {
    const navigate = useNavigate();
    
  useEffect(() => {
    // 设置定时器，3秒后执行跳转函数
    const timer = setTimeout(() => {
      navigate('/Home');
    }, 3000);

    // 在组件卸载时清除定时器，避免内存泄漏
    return () => clearTimeout(timer);
  }, []);
  return( 
  <div>
  <div>Start Page</div>
  <button onClick={()=>navigate('Home')}>Get Start</button>
  </div>
  );
};

export default StartPage;