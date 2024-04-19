import Android from "./AndroidPages/Android"
import LoggedInUserScrolledFo from "./DeskPages/LoggedInUserScrolledFo"


const Joingrp = () => {
    return (
        <div>
            <div className='mq450:hidden'>
                < LoggedInUserScrolledFo />
            </div>
            <div className='hidden mq450:block'>
                <Android/>
            </div>

        </div>
    )
}

export default Joingrp
