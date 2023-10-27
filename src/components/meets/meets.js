import { Link } from 'react-router-dom';
import ProfileHeader from '../profile/profileheader/profile-header';
import { useState } from 'react';
import Calendar from 'react-calendar';
import './meets.css';
import '../button/button.css'
import CalendarTemplate from './calendar/calendar';


const Meets = () => {
    return(
        <div className='Profile'>
            <ProfileHeader/>

        <div className='profile-wrap'>


            <div className='meets-header-wrap'>

                <h1 className='meets-text'>Встречи</h1>
                <button className='meets-button'> + Создать встречу </button>

            </div>


            <div className='meets-main-wrap'>

                <div className='meets-view-text-wrap'>
                    <span className='meets-view-text'>20 октября</span>
                    <span className='meets-view-text center'>У вас нет запланированных встреч на этот день</span>    
                </div>


                <div className='meets-calendar-wrap'>
                    <CalendarTemplate></CalendarTemplate>
                </div>

            </div>
    
        </div>
    </div>


    )
}
export default Meets;