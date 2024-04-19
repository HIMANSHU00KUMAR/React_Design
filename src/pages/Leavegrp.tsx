import AndroidLeaveGroup from "./AndroidPages/AndroidLeaveGroup"
import LoggedInUserScrolledLo from "./DeskPages/LoggedInUserScrolledLo"


const Leavegrp = () => {
    return (
        <div>
            <div className='mq450:hidden'>
                < LoggedInUserScrolledLo />
            </div>
            <div className='hidden mq450:block'>
                <AndroidLeaveGroup />
            </div>
        </div>
    )
}

export default Leavegrp
