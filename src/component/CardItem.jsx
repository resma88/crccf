
import React from "react";
 import { Link } from "react-router-dom";
import Herosection from "./Herosection";

const CardItem = ({ title, imgSrc, description, link }) => {
  return (
    <>
    <div className="col">
      <div className="card h-100 shadow-sm">
   
        <div className="group">
          <img
            src={imgSrc}
            alt={title}
            className="object-cover hover-scale"
          />
          <div className="image-overlay"></div>
        </div>

   
        <div className="card-body d-flex flex-column mt-3">
          <h5 className="card-title">{title}</h5>
          {/* {description && <p className="card-text">{description}</p>} */}

        
          <Link to ={link}
            className="learn-more mt-auto d-flex justify-content-between align-items-center "> 
            Learn More
          <span className="arrow-circle ms-2">→</span>    
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default CardItem;