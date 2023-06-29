import ServicesCard from './ServicesCard'
import './services.scss'
const Services = () => {
  return (
    <div className="services">
      <h2 className="services--title">Services</h2>
      <div className="services--line">
        <div className="services--line--left"></div>
        <ServicesCard title="Staff Recruitment" />
      </div>
      <div className="services--line">
        <div className="services--line--left"></div>
        <ServicesCard title="Acclimatization" />
      </div>
    </div>
  )
}
export default Services
