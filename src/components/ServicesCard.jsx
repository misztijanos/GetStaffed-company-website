import Button from './Button'
import './servicesCard.scss'
const ServicesCard = ({ title }) => {
  return (
    <div className="servcard">
      <h4>{title}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
        nisi delectus doloremque magnam! Velit praesentium veniam dicta
        explicabo incidunt et vitae, reprehenderit asperiores.
      </p>
      <Button />
    </div>
  )
}
export default ServicesCard
