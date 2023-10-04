import './confirmation-email.css';

const ConfirmationEmail = () => {
    return(
        <div className="sign-in">
            <div className="sign-in-header">
                <span className="confirmation-label">Подтверждение email</span>
                <span className="logo">termeet</span>
            </div>

            <div className="sign-in-inputs-wrap">
                <span className="confirmation-email-text">На вашу почту было отправлено письмо с ссылкой для подтверждения. Если письмо долго не приходит, проверьте папку спам и запросите его повторно</span>
            </div>

            <div className="sign-in-bottom">
                <button className="change-email-button">Изменить почту</button>
                <button className="new-email-button">Отправить новое письмо 3:00</button>
            </div>

        </div>
    )
}
export default ConfirmationEmail;