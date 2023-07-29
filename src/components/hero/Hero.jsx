import { AnimatePresence, motion, wrap } from "framer-motion";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaBitcoin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import banner_1 from '../../assets/house-banner-1.jpg';
import banner_2 from '../../assets/house-banner-2.jpg';
import banner_3 from '../../assets/house-banner-3.jpg';
import banner_4 from '../../assets/house-banner-4.jpg';
import './Hero.css';
const images = [
  banner_1,banner_2,banner_3,banner_4];

const Hero = () => {
const navigate = useNavigate();
    const variants = {
      enter: (direction) => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0,
        };
      },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction) => {
        return {
          zIndex: 0,
          x: direction < 0 ? 1000 : -1000,
          opacity: 0,
        };
      },
    };
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
      return Math.abs(offset) * velocity;
    };
    const [[page, direction], setPage] = useState([0, 0]);
     const imageIndex = wrap(0, images.length, page);

     const paginate = (newDirection) => {
       setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="hero-section">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div>
          <motion.img
            style={{
              width: "100%",
              maxWidth: "100%",
              maxHeight: "600px",
              height: "auto",
            }}
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(-1)}>
        <BiLeftArrow />
      </div>
      <div className="prev" onClick={() => paginate(1)}>
        <BiRightArrow />
      </div>
      <div className="hero-description-section">
        <div className="other-cost-section">
          <div className="property-rate-section">
            <div>
              <p className="property-rate-amount">0%</p>
              <p className="property-costing-name">Property Tax</p>
            </div>
          </div>

          <div className="property-rate-section">
            <p className="property-rate-amount">0%</p>
            <p className="property-costing-name">Commission Fee</p>
          </div>
          <div className="property-rate-section">
            <p className="property-rate-amount">0%</p>
            <p className="property-costing-name">Interest Rate</p>
          </div>
          <div className="property-rate-section">
            <p className="property-rate-amount">
              <FaBitcoin />
            </p>
            <p className="property-costing-name">Cryptocurrency</p>
          </div>
        </div>
        <div className="discount-section">
          <p>Get Upto $300K Discount on</p>
          <h1>Full Payment</h1>
        </div>
        <button className="register-btn" onClick={()=>navigate('/houses')}>Book your house</button>
      </div>
    </div>
  );
};
export default Hero;
