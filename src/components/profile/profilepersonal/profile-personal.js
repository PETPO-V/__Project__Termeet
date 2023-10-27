import { Link } from 'react-router-dom';
import ProfileHeader from '../profileheader/profile-header';
import './profile-personal.css';
import '../../button/button.css'


const ProfilePersonal = () => {
    return(
        <div className='Profile'>
            <ProfileHeader/>

            <div className='profile-wrap'>
                <h1 className='profile-text'>Профиль</h1>


                <div className='profile-inner-wrap'>
                    <div className='profile-buttons'>
                        <button className="profile-button active ">Личные данные</button>
                        <Link to='/ProfileNotifications' style={{ textDecoration: "none" }}><button className="profile-button">Уведомления</button></Link>
                        <Link to='/ProfileYandex' style={{ textDecoration: "none" }}><button className="profile-button">Яндекс Календарь</button></Link>
                        <Link to='/ProfileSecurity ' style={{ textDecoration: "none" }}><button className="profile-button">Безопасность</button></Link>
                    </div>

                        <div className='profile-main'>
                            <div className='profile-main-data'>
                                <img className='profile-avatar'></img>

                                <span className='profile-name'>Иван Иванов</span>
                                <span className='profile-mail'>termeetWorkLongMail@yandex.ru</span>

                                <div className='profile-inputs-wrap'>

                                    <div className="profile-input-wrap"> 
                                        <span className="profile-small-heading">Имя</span>
                                        <input className="profile-input" type="text" placeholder="Иван"/> 
                                    </div>

                                    <div className="profile-input-wrap"> 
                                        <span className="profile-small-heading">Фамилия</span>
                                        <input className="profile-input" type="text" placeholder="Иванов"/> 
                                    </div>

                                </div>

                                <div className="profile-input-wrap"> 
                                    <span className="profile-small-heading">Основная почта</span>
                                    <input className="profile-input" type="text" placeholder="termeetWorkLongMail@yandex.ru"/> 
                                </div>


                                <button className="profile-button-save">Сохранить изменения</button>

                            </div>


                        <div className='profile-main-addMail'>
                            <div className="profile-input-wrap"> 
                                <span className="profile-small-heading">Дополнительная почта</span>
                                <a>+ Добавить</a>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>



    )
}
export default ProfilePersonal;