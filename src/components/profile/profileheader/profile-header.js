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
                        <img src="eye.png" />
                    </div>

                    <div className='header-button-frame'>
                        <button className='header-button'>Создать встречу</button>
                        <div className='header-avatar-frame'>
                            <img className='header-avatar'src="eye.png" />
                        </div>
                    </div>

            </div>
        </div>

    )
}
export default ProfileHeader;