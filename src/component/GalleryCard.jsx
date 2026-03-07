import { useState } from "react";

export default function GalleryCard({ title, description, image, date, event }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="card shadow-sm gallery-card border-0">

      {/* Image Section */}
      <div className="position-relative image-container">

        <img
          src={image || ""}
          alt={title}
          className="card-img-top gallery-img"
        />

        {/* Icon */}
        <div className="icon-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
            />
          </svg>
        </div>

        {/* Overlay */}
        <div className="overlay-text">
          <h5 className="text-white fw-semibold mb-1">{title}</h5>

          <div className="small text-light">
            <span className="me-2"> {event}</span>
            <span className="me-2"> •</span>
            <span> {date}</span>
          </div>
        </div>

      </div>

      {/* Content */}
      <div className="card-body ">

        <div className="d-flex justify-content-between align-items-start">

          <p className="text-muted small d-block mb-3 description">
            {description}
          </p>
          
          {/* Arrow Button */}
          <button
            className="btn btn-sm btn-light"
            onClick={() => setOpen(!open)}
          >
            ▼
          </button>

        </div>
         <span className="badge bg-secondary small ms-2">36 Items</span>
        {/* Hidden Section */}
        {open && (
          <div className="border-top pt-3 mt-3">
            <button className="btn btn-primary w-100">
              View Collection
            </button>
          </div>
        )}

      </div>

    </div>
  );
}