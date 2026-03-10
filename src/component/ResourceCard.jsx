import React from "react";
import "./ResourceCard.css"; // CSS file for hover and shapes

export default function ResourceCard({ title, description, svgPath, badgeText, shapeClass }) {
  return (
    <div className={`card border border-secondary shadow-sm p-4 d-flex flex-column justify-content-between ${shapeClass}`}>
      
      {/* Top section: icon + content */}
      <div className="d-flex flex-column align-items-start mb-3">
        <div className="flex-shrink-0 w-14 h-14 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
          </svg>
        </div>

        <div className="d-flex flex-column">
          <h2 className="h6 fw-semibold text-dark">{title}</h2>
          <p className="text-secondary fs-8 mt-2 mb-0 flex-grow-1">{description}</p>
        </div>
      </div>

      {/* Badge */}
      {badgeText && <span className="badge bg-primary text-white align-self-start mt-3">{badgeText}</span>}
    </div>
  );
}