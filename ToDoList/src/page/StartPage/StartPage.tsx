import { useNavigate } from "react-router-dom"
const StartPage = () => {
    const navigate = useNavigate();
  return( 
  <div>
  <div>Start Page</div>
  <button onClick={()=>navigate('Home')}>Get Start</button>
  </div>
  );
};

export default StartPage;