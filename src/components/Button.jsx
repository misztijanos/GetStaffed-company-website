import { PiArrowRightFill } from 'react-icons/pi'
import './button.scss'
const Button = () => {
  return (
    <button className="button-mine">
      <PiArrowRightFill fontSize={16} /> <span>Work with us</span>
    </button>
  )
}
export default Button
