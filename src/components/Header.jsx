import logo from '../assets/logo.png'
import './header.scss'
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="header--logo" />
      <ul className="header--menu">
        <li className="active">start</li>
        <li>about</li>
        <li>services</li>
        <li>contact</li>
      </ul>

      {/* todo: a button over blue background, in tablet/desktop layout */}
    </div>
  )
}
export default Header
