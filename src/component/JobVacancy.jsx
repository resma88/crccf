// JobVacancy.js
import React from "react";
import { Link } from "react-router-dom"; // <-- import Link for navigation
import "./jobvacancy.css";

export default function JobVacancy() {
  const cards = [
    {
      id: "frontend-developer",
      title: "Frontend-Developer",
      description: "IT Department  |  Bhubaneswar, Odisha",
      badge: "Status: Available",
      buttonText: "Apply Now",
    },
    {
      id: "backend-developer",
      title: "Backend Developer",
      description: "IT Department  |  Bhubaneswar, Odisha",
      badge: "Status: Available",
      buttonText: "Read More",
    },
    {
      id: "fullstack-developer",
      title: "Fullstack Developer (MERN)",
      description: "IT Department  |  Bhubaneswar, Odisha",
      badge: "Status: Available",
      buttonText: "Start Now",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="display-5 fw-bold text-center text-dark mb-2">
        Join Our Mission
      </h1>
      <p
        className="text-center text-secondary fs-5 lh-lg mx-auto"
        style={{ maxWidth: "800px" }}
      >
        Welcome to the CR Cyber Crime Foundation's career page. We are a team of
        innovators dedicated to making the digital world safer. Browse our open
        positions and find where you fit in.
      </p>

      <div className="row g-4">
        {cards.map((card) => (
          <div key={card.id} className="col-12">
            <div className="job-card">
              {/* Left content */}
              <div className="job-left">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className="mt-3">
                  <span className="badge bg-success rounded-pill">{card.badge}</span>
                </div>
              </div>

              {/* Right button */}
              <div className="job-right">
                {/* Use React Router Link with dynamic job id */}
                <Link to={`/apply/${card.id}`} className="job-btn">
                  {card.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}