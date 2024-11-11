import "./ModifyPassword.css"
const ModifyPassword = () => {
    return(
        <div className="modify-password">
            <button className="modifyBack"></button>
            <input className="ModifyInput" type="text" placeholder="请输入邮箱"/>
            <input className="ModifyInput" type="text" placeholder="请输入旧密码"/>
            <input className="ModifyInput" type="text" placeholder="请输入新密码"/>
            <input className="ModifyInput" type="text" placeholder="请确认新密码" />
            <button className="modifyBtn">确认更改</button>
        </div>
    )
}
export default ModifyPassword;