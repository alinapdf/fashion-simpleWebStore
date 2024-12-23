import brand1 from "./../../img/brands/Amazon.png";
import brand2 from "./../../img/brands/HM.png";
import brand3 from "./../../img/brands/Lacoste.png";
import brand4 from "./../../img/brands/Levis.png";
import brand5 from "./../../img/brands/Obey.png";
import brand6 from "./../../img/brands/Shopify.png";

import "./brands.css";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#">
              <img src={brand2} alt="brand" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={brand5} alt="brand" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={brand6} alt="brand" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={brand3} alt="brand" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={brand4} alt="brand" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={brand1} alt="brand" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
