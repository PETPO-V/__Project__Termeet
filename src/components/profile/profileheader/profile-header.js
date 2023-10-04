import { Link } from 'react-router-dom';
import './profile-header.css';

const ProfileHeader = () => {
    return(
        <div className='profile'>
            <div className='header'>

                    <div className='header-logo-frame'>
                        <span className="header-logo">termeet</span> 

                    </div>

                    <div className='header-link-frame'>
                        <span className="header-link">Мои встречи</span>
                        <span className="header-link">Команды</span>
                        <span>0</span>
                    </div>

                    <div className='header-button-frame'>
                        <button className='header-button'>Создать встречу</button>
                        <span>00</span>
                    </div>

            </div>
        </div>

    )
}
export default ProfileHeader;