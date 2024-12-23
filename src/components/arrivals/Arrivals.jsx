import Card from "../card/Card";
import "./../../styles/common.css";
import "./arrivals.css";

import card01 from "./../../img/categories/cat-01.jpg";
import card02 from "./../../img/categories/cat-02.jpg";
import card03 from "./../../img/categories/cat-03.jpg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">New Arrivals</h2>
        </div>
        <div className="arrivals__cards">
          <Card
            title="Hoodies & Sweetshirt"
            muted="Explore now!"
            img={card01}
          />
          <Card title="Coats & Parkas" muted="Explore now!" img={card02} />
          <Card title="Tees & T-Shirt" muted="Explore now!" img={card03} />
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
