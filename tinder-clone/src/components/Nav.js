import whiteLogo from '../images/tinder-logo-white.png'
import colorLogo from '../images/tinder-logo-color.png'

const Nav = ({minimal, authToken}) => {
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
            </div>{minimal}
            {!authToken && <button className="nav-button">Log in</button>}
        </nav>
    )
}
export default Nav