// src/component/About.jsx
import React from "react";
import "../App.css";
import { aboutSections } from "../data/AboutData";

const About = (props) => {
  return (
    <main className="flex-grow-1 position-relative custom-pt">
      <div>
        <section className="position-relative container px-4 px-sm-5 px-md-5 py-4 py-sm-5 py-md-5 py-lg-5">
          <h1 className="display-6 fw-bold text-center text-dark mb-5">
            About Us
          </h1>

          {/* CONTENT SECTIONS */}
          <div className="mt-4">
            {aboutSections.map((section) => {
              const imageRight = section.id % 2 !== 0; // alternate layout

              return (
                <section key={section.id} className="section-custom">
                  <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                    {/* IMAGE LEFT */}
                    {!imageRight && (
                      <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                        <img src={section.image} alt={section.title} className="img-fluid" />
                      </div>
                    )}

                    {/* TEXT */}
                    <div className="col py-2">
                      <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3">
                        {section.title}
                      </h2>
                      <div className="mt-3 d-flex flex-column gap-3">
                        <p className="text-secondary lh-lg">{section.paragraphs}</p>
                      </div>
                    </div>

                    {/* IMAGE RIGHT */}
                    {imageRight && (
                      <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                        <img src={section.image} alt={section.title} className="img-fluid" />
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;