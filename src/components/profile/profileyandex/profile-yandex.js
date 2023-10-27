import { Link } from 'react-router-dom';
import ProfileHeader from '../profileheader/profile-header';
import './profile-yandex.css';
import '../../button/button.css'


const ProfileYandex = () => {
    return(
        <div className='Profile'>
            <ProfileHeader/>

            <div className='profile-wrap'>
                <h1 className='profile-text'>Профиль</h1>


                <div className='profile-inner-wrap'>
                    <div className='profile-buttons'>
                        <Link to='/ProfilePersonal' style={{ textDecoration: "none" }}><button className="profile-button  ">Личные данные</button></Link>
                        <Link to='/ProfileNotifications' style={{ textDecoration: "none" }}><button className="profile-button">Уведомления</button></Link>
                        <button className="profile-button active">Яндекс Календарь</button>
                        <Link to='/ProfileSecurity ' style={{ textDecoration: "none" }}><button className="profile-button">Безопасность</button></Link>
                    </div>

                        <div className='profile-main'>
                            <div className='profile-main-data yandex'>
                                
                                <span className='yandex-heading'>Подключенные календари</span>

                                <span className='yandex-text'>У вас еще нет подключенных календарей. Синхронизируйте ваш Яндекс календарь с termeet, чтобы ваши встречи всегда были рядом</span>

                                <button className='yandex-button'> <img src="eye.png" /> Подключить</button>


                            </div>



                    </div>
                </div>



            </div>
        </div>



    )
}
export default ProfileYandex;