import investment_img from '../../assets/investment.png';
import './Investment.css';

const Invesment = () => {
    return (
      <div>
        <img src={investment_img} alt="" className="invest-img" />
        <div className="investment-guideline">
          <div className='guidline-container'>
            <h1>Investment Guideline</h1>
                    <p>All you need to know how to invest in our company</p>
                    <button className='investment-button'>Explore more</button>
          </div>
        </div>
      </div>
    );
}
export default Invesment