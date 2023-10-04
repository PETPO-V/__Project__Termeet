import './sign-in.css';
import { Link } from 'react-router-dom';


const SignIn = () => {
    return(
        <div className='authorization'>
            <div className="sign-in">
                <div className="sign-in-header">
                    <span className="sign-in-label">Вход</span>
                    <span className="logo">termeet</span>
                </div>

                <div className="sign-in-inputs-wrap">
                    <div className="sign-in-input-wrap"> 
                        <span className="small-heading">Почта</span>
                        <input className="sign-in-input" type="text" placeholder="Введите почту"/> 
                    </div>

                    <div className="sign-in-input-wrap"> 
                        <div className="sign-in-header-password"> 
                            <span className="small-heading">Пароль</span> 
                            <Link to="/PasswordRecovery" className="small-heading-button">Забыли пароль?</Link>
                        </div> 
                    <input className="sign-in-input" type="text" placeholder="Введите пароль"/>
                    </div>
                </div>

                <div className="sign-in-bottom">
                    <Link to="/signUp"  className="small-heading-button">Ещё нет аккаунта?</Link>
                    <button className="sign-in-button"> Войти </button>
                </div>
            </div>
        </div>
    )

}
export default SignIn;