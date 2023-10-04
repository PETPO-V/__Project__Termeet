import './sign-up-form.css';

const SignUpForm = () => {
    return(
        <div className="sign-in">
            <div className="sign-in-header">
                <span className="sign-in-label">Регистрация</span>
                <span className="logo">termeet</span>
            </div>

            <div className="sign-in-inputs-wrap">
                <div className="sign-in-input-wrap"> 
                    <span className="small-heading">Имя</span>
                    <input className="sign-in-input" type="text" placeholder="Введите имя"/> 
                </div>

                <div className="sign-in-input-wrap"> 
                    <span className="small-heading">Фамилия</span>
                    <input className="sign-in-input" type="text" placeholder="Введите фамилию"/> 
                </div>

                <div className="sign-in-input-wrap"> 
                    <span className="small-heading">Пароль</span>
                    <input className="sign-in-input" type="text" placeholder="Введите пароль"/> 
                    <span className="sign-up-password-note">Пароль должен содержать не менее 8 символов и состоять из цифр и латинских букв</span>
                </div>

                <div className="sign-in-input-wrap"> 
                    <span className="small-heading">Подтверждение пароля</span>
                    <input className="sign-in-input" type="text" placeholder="Подтвердите пароль"/> 
                </div>
            </div>

            <div className="sign-in-bottom">
                <span className="small-heading-button">Уже есть аккаунт?</span>
                <button className="sign-in-button">Зарегистрироваться</button>
            </div>
        </div>
    )
}
export default SignUpForm;