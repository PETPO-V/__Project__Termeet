import { Link } from 'react-router-dom';
import ProfileHeader from '../profileheader/profile-header';
import './profile-notifications.css';
import '../../button/button.css'


const ProfileNotifications = () => {
    return(
        <div className='Profile'>
        <ProfileHeader/>

        <div className='profile-wrap'>
            <h1 className='profile-text'>Профиль</h1>


            <div className='profile-inner-wrap'>
                <div className='profile-buttons'>
                        <Link to='/ProfilePersonal' style={{ textDecoration: "none" }}><button className="profile-button  ">Личные данные</button></Link>
                        <button className="profile-button active">Уведомления</button>
                        <Link to='/ProfileYandex' style={{ textDecoration: "none" }}><button className="profile-button">Яндекс Календарь</button></Link>
                        <Link to='/ProfileSecurity ' style={{ textDecoration: "none" }}><button className="profile-button">Безопасность</button></Link>
                </div>

                    <div className='profile-main'>
                        <div className='profile-main-data'>
                            
                        <span className='notifications-heading'>Уведомления по электронной почте</span>

                        <div className="sign-in-inputs-wrap">
                            <div className="sign-in-input-wrap"> 
                                <span className="notifications-small-heading">Выберите почту для получения уведомлений</span>
                                <select className="notifications-select" type="text" > 
                                    <option selected disabled hidden>Выбрать почту</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select> 
                            </div>

                        <div className="sign-in-input-wrap"> 
                                <div className="sign-in-header-password"> 
                                    <span className="notifications-small-heading">Добавление почты</span> 
                                </div> 
                            <input className="sign-in-input" type="text" placeholder="Введите ваш email"/>
                        </div>


                        </div>
                    
                        <div className="notifications-bottom">

                            <button className="profile-button-cancel">Отмена</button>
                            <button className="profile-button-save">Отправить письмо для подтверждения</button>

                        </div>

                    </div>

                </div>
            </div>





        </div>
    </div>


    )
}
export default ProfileNotifications;