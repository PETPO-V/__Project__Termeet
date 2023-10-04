import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div className='authorization'>
            <div className="sign-in">
                <div className="sign-in-header">
                    <span className="sign-in-label">Регистрация</span>
                    <span className="logo">termeet</span>
                </div>

                <div className="sign-in-inputs-wrap">
                    <div className="sign-in-input-wrap"> 
                        <span className="small-heading">Почта</span>
                        <input className="sign-in-input" type="text" placeholder="Введите почту"/> 
                    </div>
                </div>

                <div className="sign-in-bottom">
                    <Link to="/signIn"  className="small-heading-button">Уже есть аккаунт?</Link>
                    <button className="sign-in-button">Далее</button>
                </div>
            </div>
        </div>
    )
}
export default SignUp;