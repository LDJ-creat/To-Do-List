import './MyWish.css'
import { useNavigate } from 'react-router-dom';
import AddWish from '../../components/addWish';
import { useSelector} from 'react-redux';
const MyWish = () => {
    const navigate = useNavigate();
    let wishes=useSelector((state:any)=>state.wishes.wishes)
    const handleAddWish = () => {
        const addWishMenu = document.getElementById('addWishMenu')
        const myWishList= document.getElementById('my-wish-list')
        if (addWishMenu){
        addWishMenu.style.display = 'block'
        }
        if (myWishList){
            myWishList.style.filter = 'blur(5px)'   
        }
    }
    return (
        <div>
        <div id="my-wish-list">
            <button className="my-wish-back" onClick={()=>navigate('/Home')}></button>
            {wishes.map((wish:any,index:number)=>(
                <div key={index} className="Wish-List">
                    <div className="my-wish-name">{wish.event}</div>
                    {wish.is_cycle?<span className='my-wish-cycle'>循环</span>:null}
                    <div className="my-wish-description">{wish.description}</div>
                </div>
            ))}
            {/* <div className="Wish-List">
                <div className="my-wish-name">xinyuan心愿心愿心愿心愿</div>
                <span className='my-wish-cycle'>循环</span>
                <div className="my-wish-description">详情</div>
            </div> */}
            <button className="my-wish-add" onClick={handleAddWish}></button>
            
        </div>
        <AddWish />
       </div>

    )
}
export default MyWish;