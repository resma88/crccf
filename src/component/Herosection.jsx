import React, { useState, useEffect } from "react";
import "./hero.css";

export default function Herosection() {
  // Right side images
  const images = [
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Text carousel items for left content
  const services = [
    {
      badge: "IT Solution",
      heading: "Secure IT & Software Solutions",
      paragraph:
        "We design and develop secure enterprise software, cloud infrastructure, and IT systems with compliance, scalability, and security at the core.",
    },
    {
      badge: "Artificial Intelligence",
      heading: "AI-Driven Threat Intelligence",
      paragraph:
        "Our AI-powered systems detect anomalies, predict cyber threats, and help organizations respond proactively before damage occurs.",
    },
    {
      badge: "Legal Support",
      heading: "Legal & Victim Support Services",
      paragraph:
        "We assist cyber crime victims with FIR filing, legal documentation, court procedures, and digital identity recovery.",
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Change right-side image every 3 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  // Change left-side text every 3 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(textInterval);
  }, []);

  // Get current text
  const { badge, heading, paragraph } = services[currentTextIndex];

  return (
    <>
      <section
        className="position-relative w-100 d-flex align-items-center pt-4 pb-5 pt-lg-0 pb-lg-0"
        style={{
          minHeight: "85vh",
          background:
            "linear-gradient(to bottom right, #f8fafc, rgba(219,234,254,0.5))",
        }}
      >
        <div className="container-fluid px-4 px-sm-5 px-lg-5">
          <div className="row align-items-stretch g-4 g-lg-5">
            {/* Left Content */}
            <div className="col-lg-6 text-center text-lg-start order-1 mt-4 mt-lg-4 position-relative">
              {/* Badge */}
              <div className="d-flex justify-content-center  justify-content-lg-start mt-4 mb-4">
                <span className="d-inline-flex align-items-center px-3 py-1 rounded-pill bg-primary bg-opacity-25 border border-primary text-primary text-uppercase fw-bold small">
                  {badge}
                </span>
              </div>

              {/* Heading */}
              <div
                className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 justify-content-center justify-content-lg-start position-relative mb-2 mb-sm-4"
                style={{ minHeight: "100px" }}
              >
                <h1 className="display-3 fw-bold">{heading}</h1>
              </div>

              {/* Paragraph */}
              <p className="lead">{paragraph}</p>

              <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 mt-3 justify-content-center justify-content-lg-start w-100">
                <div className="d-flex flex-column gap-3 mt-4 w-100">
                  {/* Explore Service Button */}
                  <button className="btn btn-primary w-100 rounded-0 py-2 fs-6">
                    Explore Service
                  </button>

                  {/* Contact Us Button */}
                  <button className="btn btn-light w-100 rounded-0 py-2 fs-6">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center order-2 position-relative">
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: "100%",
                  height: "140%",
                  backgroundColor: "rgba(191, 219, 254, 0.5)",
                  filter: "blur(6rem)",
                  zIndex: -1,
                }}
              ></div>

              {/* Image Card Container */}
              <div
                className="position-relative overflow-hidden shadow-lg rounded-3 border border-white"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "500px",
                }}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Hero"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
               {/* <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 bg-dark ">

                    <marquee className="flex-grow-1 w-100 w-md-auto fw-lighter ">
                        <spam className="fw-bold">Welcome to CR Cyber Crime Foundatio</spam>n — one of the best organizations in India. With 24/7 dedication, CR Cyber Crime strives to secure justice for cyber fraud victims, protect digital rights, and provide legal and technical assistance.
                    </marquee>


                </div> */}
    </>
  );
}