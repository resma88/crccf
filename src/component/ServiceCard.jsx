import React, { useState } from "react";
import "./ServiceCard.css"; // We'll add CSS here

export default function ServiceCard({ cards = [], limit = 8 }) {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? cards : cards.slice(0, limit);

  return (
    <>
      <div className="row g-4">
        {visibleCards.map((card, index) => (
          <div key={index} className="col-6 col-md-6 col-lg-3">
            <div className="service-card">
              {/* Icon */}
              <div className="service-card-icon">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: "60px", height: "80px", color: "#7c3aed" }}
                >
                  {Array.isArray(card.svgPaths)
                    ? card.svgPaths.map((d, i) => <path key={i} d={d} />)
                    : card.svgPaths
                    ? <path d={card.svgPaths} />
                    : card.svg
                  }
                </svg>
              </div>

              {/* Content */}
              <div className="service-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cards.length > limit && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-primary px-4 rounded-pill"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "View All Solution"}
          </button>
        </div>
      )}
    </>
  );
}