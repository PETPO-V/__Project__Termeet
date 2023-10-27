import { Link } from 'react-router-dom';
import ProfileHeader from '../profileheader/profile-header';
import './profile-security.css';
import '../../button/button.css'


const ProfileSecurity = () => {
    return(
        <div className='Profile'>
            <ProfileHeader/>

            <div className='profile-wrap'>
                <h1 className='profile-text'>Профиль</h1>


                <div className='profile-inner-wrap'>
                    <div className='profile-buttons'>
                        <Link to='/ProfilePersonal' style={{ textDecoration: "none" }}><button className="profile-button  ">Личные данные</button></Link>
                        <Link to='/ProfileNotifications' style={{ textDecoration: "none" }}><button className="profile-button">Уведомления</button></Link>
                        <Link to='/ProfileYandex' style={{ textDecoration: "none" }}><button className="profile-button">Яндекс Календарь</button></Link>
                        <button className="profile-button active">Безопасность</button>
                    </div>

                        <div className='profile-main '>
                            <div className='profile-main-data security '>
                                <span className='security-text'>Пароль</span>
                                <a>Изменить пароль</a>
                        
                            </div>

                            <span className='security-text'>ㅤДействия с аккаунтом</span>

                            <div className='profile-main-data security '>
                                <div className='security-buttons-frame'>
                                    <img src='eye.png'/>
                                    <div className='security-buttons-inner-frame'>
                                        <span className='security-buttons-heading'>Выход</span>
                                        <span className='security-buttons-text'>Вы можете выйти из вашей учетной записи на этом устройстве</span>
                                    </div>
                                </div>


                            </div>

                            <div className='profile-main-data security '>
                                <div className='security-buttons-frame'>
                                    <img src='eye.png'/>
                                    <div className='security-buttons-inner-frame'>
                                        <span className='security-buttons-heading delete'>Удаление аккаунта</span>
                                        <span className='security-buttons-text delete'>Удаление аккаунта приведет к удалению всех данных вашей учетной записи</span>
                                    </div>
                                </div>


                            </div>



                    </div>
                </div>



            </div>
        </div>



    )
}
export default ProfileSecurity;