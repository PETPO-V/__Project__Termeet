import './app.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from '../signin/sign-in';
import SignUp from '../signup/sign-up';
import ConfirmationEmail from '../confirmationemail/confirmation-email';
import SignUpForm from '../signup/sign-up-form';
import PasswordRecovery from '../passwordrecovery/password-recovery';
import PasswordRecoveryInfo from '../passwordrecovery/password-recovery-info';
import PasswordRecoveryForm from '../passwordrecovery/password-recovery-form';
import ProfileHeader from '../profile/profileheader/profile-header';

function App() {
    return (
            <Router>
                <div className='app'> 
                    <Routes>
                        <Route exact path="/signIn"element={<SignIn/>}/>
                        <Route exact path="/signUp"element={<SignUp/>}/>
                        <Route exact path="/confirmationEmail"element={<ConfirmationEmail/>}/>
                        <Route exact path="/signUpForm"element={<SignUpForm/>}/>
                        <Route exact path="/PasswordRecovery"element={<PasswordRecovery/>}/>
                        <Route exact path="/PasswordRecoveryInfo"element={<PasswordRecoveryInfo/>}/>
                        <Route exact path="/PasswordRecoveryForm"element={<PasswordRecoveryForm/>}/>
                        <Route exact path="/ProfileHeader"element={<ProfileHeader/>}/>
                    </Routes>
                </div>
            </Router>
    );
}
export default App;