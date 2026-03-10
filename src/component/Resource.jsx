import React from "react";
import ResourceCard from "./ResourceCard";
import cardsData from "../data/ResourceData";

export default function Resource() {
  return (
    <div className="container-fluid px-4  my-5">

           
           <div className="mb-5">
              <h1 className="fw-bold text-dark  text-center lh-1 custom-heading">
                Cyber Resources & Downloads
                
              </h1>

              <p className="mt- text-center text-secondary  lh-lg mx-auto ">
               Explore a curated collection of cybersecurity resources, toolkits, forms, and compliance documents to support digital security operations.
              </p>

              
              </div>
<div className="d-flex justify-content-center">
  <div className="position-relative" style={{ minWidth: "600px", maxWidth: "300px" }}>
    <input
      type="text"
      className="form-control  ps-4 pe-3"
      placeholder="Search resources..."
    />

  </div>
</div>
      <div className="row g-4 mt-3 mb-3">
        {cardsData.map((card, index) => (
          <div key={index} className="col-6 col-md-6 col-lg-3 mb-5">
            <ResourceCard
              title={card.title}
              description={card.description}
              svgPath={card.svgPath}
              badgeText={card.badgeText}
              shapeClass={card.shapeClass}
            />
          </div>
        ))}
      </div>
    </div>
  );
}