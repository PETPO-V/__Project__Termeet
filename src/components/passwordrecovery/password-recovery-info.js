import '../confirmationemail/confirmation-email';

const PasswordRecoveryInfo = () => {
    return(
        <div className="sign-in">
            <div className="sign-in-header">
                <span className="confirmation-label">Восстановление пароля</span>
                <span className="logo">termeet</span>
            </div>

            <div className="sign-in-inputs-wrap">
                <span className="confirmation-email-text">На адрес Termeet@mail.ru отправлено письмо с ссылкой для восстановления пароля. Если письмо долго не приходит, проверьте папку спам и запросите его повторно</span>
            </div>

            <div className="sign-in-bottom">
                <button className="change-email-button">Изменить почту</button>
                <button className="new-email-button">Отправить новое письмо 3:00</button>
            </div>

        </div>
    )
}
export default PasswordRecoveryInfo;