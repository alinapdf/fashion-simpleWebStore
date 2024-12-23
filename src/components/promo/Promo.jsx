import "./promo.css";
import "./../../styles/common.css";

import promoImg from "./../../img/images/header-img.jpg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight">
                <span>Let's</span>
              </span>{" "}
              explore
              <span className="highlight highlight--yellow">
                <span>unique</span>
              </span>
              clothes.
            </div>
            <div className="promo__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="google.com" className="promo__btn">
                Shop now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promoImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
