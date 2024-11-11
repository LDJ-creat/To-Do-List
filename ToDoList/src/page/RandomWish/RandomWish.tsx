import './RandomWish.css'
import  chooseImg from '../../images/心愿卡（背面）.svg'
const RandomWish = () => {
    return(
        <div className='RandomWish'>
            <button className='RandomWish-backBtn'></button>
            {/* <div className='chooseBox'>
                <div className='chooseImg'></div>
                <img src={chooseImg} alt="" />
                <div></div>

            </div> */}
            <img className='chooseImg' src={chooseImg} alt="" />
            <button className='chooseBtn'>抽一次</button>
        </div>
    )
}
export default RandomWish;