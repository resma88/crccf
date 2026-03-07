import React, { useState } from "react";
import "../App.css";
import { introductionSections } from "../data/IntroductionData";

const Intro = () => {
  // PAGINATION LOGIC
  const sectionsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * sectionsPerPage;
  const indexOfFirst = indexOfLast - sectionsPerPage;

  const currentSections = introductionSections.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(introductionSections.length / sectionsPerPage);

  return (
    <main className="flex-grow-1 position-relative custom-pt">
      <div>
        <section className="position-relative container px-4 px-sm-5 px-md-5 py-4 py-sm-5 py-md-5 py-lg-5">
          {/* Breadcrumb */}
          <nav className="text-secondary mb-3 mb-sm-4 custom-nav-text">
            <a href="/" className="text-primary">
              Home
            </a>
            <span> &gt; </span>
            <span>Introduction</span>
          </nav>

          {/* HERO SECTION */}
          <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-center">
            <div>
              <h1 className="fw-bold text-dark lh-1 custom-heading">
                Building a{" "}
                <span className="text-gradient">Secure Digital Future</span>
              </h1>

              <p className="mt-3 text-secondary lh-lg custom-paragraph">
                Welcome to CRCCF. We are dedicated to creating a safe,
                inclusive, and empowered digital world for every citizen.
              </p>

              <div className="mt-3 d-flex flex-wrap gap-2">
                <span className="px-3 py-1 custom-badge rounded-pill">
                  Trust
                </span>
                <span className="px-3 py-1 custom-badge  rounded-pill">
                  Safety
                </span>
                <span className="px-3 py-1 custom-badge  rounded-pill">
                  Empowerment
                </span>
                <span className="px-3 py-1 custom-badge  rounded-pill">
                  Education
                </span>
              </div>
            </div>

            <div
              className="position-relative"
              style={{
                width: "500px",
                height: "250px",
                backgroundColor: "lightblue",
              }}
            ></div>
          </div>

          {/* PAGINATION */}
          <div className="mt-5 d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                {/* Previous */}
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                {/* Next */}
                <li
                  className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* CONTENT SECTIONS */}
          <div className="mt-4">
            {currentSections.map((section, index) => {
              const imageRight = index % 2 !== 0;

              return (
                <section key={section.id} className="section-custom">
                  <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                    {/* IMAGE LEFT */}
                    {!imageRight && (
                      <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                        <img src={section.image} alt="" className="img-fluid" />
                      </div>
                    )}

                    {/* TEXT */}
                    <div className="col py-2">
                      <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3">
                        {section.title}
                      </h2>

                      <div className="mt-3 d-flex flex-column gap-3">
                        {section.paragraphs.map((text, i) => (
                          <p
                            key={i}
                            className="mb-0 fs-6 text-secondary"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* IMAGE RIGHT */}
                    {imageRight && (
                      <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                        <img src={section.image} alt="" className="img-fluid" />
                      </div>
                    )}
                  </div>
                  <h2 className="mb-4 pb-2 border-bottom d-flex align-items-center mt-4"></h2>
                </section>
              );
            })}
          </div>

          {/* PAGINATION */}
          <div className="mt-5 d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                {/* Previous */}
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                {/* Next */}
                <li
                  className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Intro;
