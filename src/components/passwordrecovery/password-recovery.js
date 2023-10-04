import { Link } from 'react-router-dom';

const PasswordRecovery = () => {
    return(
        <div className="sign-in">
            <div className="sign-in-header">
                <span className="sign-in-label">Восстановление пароля</span>
            </div>

            <div className="sign-in-inputs-wrap">
                <div className="sign-in-input-wrap"> 
                    <span className="small-heading">Введите адрес электронной почты</span>
                    <input className="sign-in-input" type="text" placeholder="Введите почту"/> 
                </div>
            </div>

            <div className="sign-in-bottom">
                <Link to="/signIn" className="small-heading-button">Вернуться ко входу</Link>
                <Link to="/PasswordRecoveryInfo"> <button className="sign-in-button">Восстановить</button></Link>
            </div>
        </div>
    )
}
export default PasswordRecovery;