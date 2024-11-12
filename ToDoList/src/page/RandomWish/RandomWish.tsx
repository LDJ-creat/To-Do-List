import './RandomWish.css'
import  chooseImg from '../../images/心愿卡（背面）.svg'
import {  useNavigate } from 'react-router-dom'
const RandomWish = () => {
    const navigate = useNavigate();
    return(
        <div className='RandomWish'>
            <button className='RandomWish-backBtn' onClick={() => navigate('/Home')}></button>
            {/* <div className='chooseBox'>
                <div className='chooseImg'></div>
                <img src={chooseImg} alt="" />
                <div></div>

            </div> */}
            <img className='chooseImg' src={chooseImg} alt="" />
            <button className='chooseBtn' onClick={() =>navigate('/finishChoose') }>抽一次</button>
        </div>
    )
}
export default RandomWish;