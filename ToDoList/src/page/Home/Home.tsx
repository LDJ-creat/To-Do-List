import { Outlet, useNavigate } from "react-router-dom"
const Home=()=>{
    const navigate=useNavigate()
    return(
        <div className='Home'>
            主页
            <button onClick={()=>navigate("")}>图像</button>
            <button onClick={()=>navigate("/Home/list")}>列表</button>
            <Outlet/>
        </div>
    )
}
export default  Home