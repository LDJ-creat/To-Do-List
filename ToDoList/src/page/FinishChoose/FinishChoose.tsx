import './FinishChoose.css'
import FinishChooseImg from '../../images/心愿卡正面（底）.svg'
const FinishChoose = () => {
    return(
        <div className='FinishChoose'>
            <img  id='FinishChooseImg'src={FinishChooseImg} alt="" />
            <div className="resultName">man</div>
            <div className='result'>man</div>
            <button className='again'>重抽</button>
            <button className='confirmAdd'>添加</button>
        </div>
    )
}
export default FinishChoose;