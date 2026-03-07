import React, { useState } from "react";
import { activities } from "../data/ActivityData";

const Activity = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const sectionsPerPage = 3;

  const totalPages = Math.ceil(activities.length / sectionsPerPage);

  const currentSections = activities.slice(
    currentPage * sectionsPerPage,
    currentPage * sectionsPerPage + sectionsPerPage
  );

  const goPrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  return (
    <main className="flex-grow-1 position-relative pt-5">
      <div style={{ opacity: 1, transform: "none" }}>
        <section className="container px-4 py-4">
          <h1 className="display-6 fw-bold text-center text-dark mb-5">
            Our Activities
          </h1>

          {/* Sections for current page */}
          <div className="d-flex flex-column gap-5">
            {currentSections.map((item) => (
              <section key={item.id} className="mb-5">
                <div className="row align-items-center g-4 g-lg-5">
                  {item.svg && (
                    <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start">
                      <div className="w-100 p-3" style={{ maxWidth: "250px" }}>
                        {item.svg}
                      </div>
                    </div>
                  )}
                  <div className={`col-12 ${item.svg ? "col-lg-8" : ""}`}>
                    <h2 className="h4 fw-semibold text-primary mb-3">
                      {item.title}
                    </h2>
                    <p className="text-secondary lh-lg">{item.description}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
              {/* Previous button */}
              <button
                className="btn btn-outline-primary rounded-circle"
                onClick={goPrev}
                disabled={currentPage === 0}
              >
                <span className="fw-bold" >&lt;</span> 
              </button>

              {/* Dots */}
              <div className="d-flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: currentPage === index ? "#0d6efd" : "#ced4da",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                className="btn btn-outline-primary rounded-circle"
                onClick={goNext}
                disabled={currentPage === totalPages - 1}
              >
               <span className=" fw-bold" >&gt;</span> 
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Activity;