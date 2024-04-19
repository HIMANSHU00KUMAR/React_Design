import AndroidSignin from "./AndroidPages/AndroidSignin"
import AndroidSignup from "./AndroidPages/AndroidSignup"
import DesktopJoinGroup from "./DeskPages/DesktopJoinGroup"


const Signup = () => {
    return (
        <div>
            <div className='mq450:hidden'>
                < DesktopJoinGroup/>
            </div>
            <div className='hidden mq450:block'>
                <AndroidSignup />
            </div>
        </div>
    )
}

export default Signup
