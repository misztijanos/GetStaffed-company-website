import './banner.scss'
import nz from '../assets/nz.webp'
import Button from './Button'
import Socials from './Socials'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner--left">
        <h1 className="banner--left--hi">
          Hey, <span>we're GetStaffed</span>
        </h1>
        <h3 className="banner--left--description">
          We link <span>your business</span> with overseas employees
        </h3>
        <Button />
        <Socials />
      </div>
      <div className="banner--right">
        <img src={nz} alt="map of nz" />
      </div>
    </div>
  )
}
export default Banner
