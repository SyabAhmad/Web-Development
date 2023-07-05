import React from "react";
import "./HeadSection.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/1.jpg";
const images = [
  {
    img: { img2 },
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adsit amet consectetursit amet consectetur ad ad",
  },
  {
    img: { img3 },
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adsit amet consectetursit amet consectetur ad ad",
  },
  {
    img: { img4 },
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adsit amet consectetursit amet consectetur ad ad",
  },
];

const HeadSection = () => {
  return (
    <div className="infoSection">
      <div className="titileAndEach">
        <h2>Worlds need quality</h2>
        <p>As you are human, you will need me</p>
      </div>

      <div className="frontImage">
        <img src={img1} alt="image" />
      </div>

      <div className="cardsSection">
        <div className="card">
          <img src={img2} alt="image" />
          <div>
            <h2>{images[0].title}</h2>
            <hr />
            <p>{images[0].description}</p>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="image" />
          <div>
            <h2>{images[0].title}</h2>
            <hr />
            <p>{images[0].description}</p>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="image" />
          <div>
            <h2>{images[0].title}</h2>
            <hr />
            <p>{images[0].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
