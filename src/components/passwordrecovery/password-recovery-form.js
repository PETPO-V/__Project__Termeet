

const PasswordRecoveryForm = () => {
    return(
        <div className="sign-in">
            <div className="sign-in-header">
                <span className="sign-in-label">Восстановление пароля</span>
            </div>

            <div className="sign-in-inputs-wrap">
                <div className="sign-in-input-wrap"> 
                    <span className="small-heading">Новый пароль</span>
                    <input className="sign-in-input" type="text" placeholder="Введите пароль"/> 
                    <span className="sign-up-password-note">Пароль должен содержать не менее 8 символов и состоять из цифр и латинских букв</span>
                </div>

                <div className="sign-in-input-wrap"> 
                    <span className="small-heading">Подтверждение пароля</span>
                    <input className="sign-in-input" type="text" placeholder="Введите пароль"/> 
                </div>
            </div>

            <div className="sign-in-bottom">
                <span className="small-heading-button">Вернуться ко входу</span>
                <button className="sign-in-button">Восстановить</button>
            </div>
        </div>
    )
}
export default PasswordRecoveryForm;