import './MyWish.css'
const MyWish = () => {
    return (
        <div className="my-wish">
            <button className="my-wish-back"></button>
            <div className="Wish-List">
                <div className="my-wish-name">xinyuan心愿心愿心愿心愿</div>
                <span className='my-wish-cycle'>循环</span>
                <div className="my-wish-description">详情</div>
            </div>
            <button className="my-wish-add"></button>
        </div>

    )
}
export default MyWish;