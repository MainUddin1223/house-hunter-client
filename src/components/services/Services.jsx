import service_icon_1 from '../../assets/service-icon1.svg';
import service_icon_2 from '../../assets/service-icon2.svg';
import service_icon_3 from '../../assets/service-icon3.svg';
import service_icon_4 from '../../assets/service-icon4.svg';
import service_icon_5 from '../../assets/service-icon5.svg';
import service_icon_6 from '../../assets/service-icon6.svg';
import './Services.css';
const Services = () => {
    return (
      <div>
        <h1 className='Service-heading'>Services</h1>
        <hr />
        <div className="services-section">
          <div className="service-item">
            <img src={service_icon_1} alt="" />
            <p>Property Management</p>
          </div>
          <div className="service-item">
            <img src={service_icon_2} alt="" />
            <p>Property Mortgage Finance</p>
          </div>
          <div className="service-item">
            <img src={service_icon_3} alt="" />
            <p>Holiday Homes</p>
          </div>
          <div className="service-item">
            <img src={service_icon_4} alt="" />
            <p>Property Buy & Sell</p>
          </div>
          <div className="service-item">
            <img src={service_icon_5} alt="" />
            <p>Residential Sales & Leasing</p>
          </div>
          <div className="service-item">
            <img src={service_icon_6} alt="" />
            <p>Property Security Assurances</p>
          </div>
        </div>
      </div>
    );
};
export default Services;
