import AndroidSignin from "./AndroidPages/AndroidSignin"
import DesktopJoinGroupSignIN from "./DeskPages/DesktopJoinGroupSignIN"


const SignIn = () => {
    return (
        <div>
            <div className='mq450:hidden'>
                < DesktopJoinGroupSignIN />
            </div>
            <div className='hidden mq450:block'>
                <AndroidSignin />
            </div>
        </div>
    )
}

export default SignIn
