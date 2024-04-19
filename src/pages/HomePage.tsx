import NotLoggedInDesktop from '../components/Deskcomponents/NotLoggedInDesktop'
import AndroidLong from './AndroidPages/AndroidLong'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div>
            <div className='mq450:hidden'>
                <NotLoggedInDesktop />
            </div>
            <div className='hidden mq450:block'>
                <AndroidLong />
            </div>

        </div>
    )
}

export default HomePage