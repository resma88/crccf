import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Service() {

  const services = [
    {
      id: 1,
      title: "Software & IT Services",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873550/Software_and_IT_services_sqblrz_jj5xhq.jpg",
      link: "/SoftwareIt",
    },
    {
      id: 2,
      title: "Digital Marketing and Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873547/Digital_Marketing_pl1swu_obovwy.jpg",
      link: "/SoftwareIt_Intro",
    },
    {
      id: 3,
      title: "Victim Support Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873550/victim_support_services_zo1kwr_nkd3ps.jpg",
    },
    {
      id: 4,
      title: "Legal Information and Documentation Support",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873549/legal_support_documentaion_kioiym_lcw3dn.jpg",
    },
    {
      id: 5,
      title: "Cyber Security Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873549/legal_services_dmoy1s_rsohem.jpg",
    },
    {
      id: 6,
      title: "Cyber Investigation Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873549/legal_support_documentaion_kioiym_lcw3dn.jpg",
    },
    {
      id: 7,
      title: "Legal Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873549/legal_support_documentaion_kioiym_lcw3dn.jpg",
    },
    {
      id: 8,
      title: "Education Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873549/legal_support_documentaion_kioiym_lcw3dn.jpg",
    },
    {
      id: 9,
      title: "Training and Internship Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873549/legal_support_documentaion_kioiym_lcw3dn.jpg",
    },
    {
      id: 10,
      title: "Placement Service",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765873549/legal_support_documentaion_kioiym_lcw3dn.jpg",
    }
  ];

  return (
    <>
      <main
        className="flex-grow-1 position-relative"
        style={{ paddingTop: "50px" }}
      >

        {/* Heading Section */}
        <section className="container-fluid px-2 px-sm-4 px-md-5 py-5">

          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark mb-4 display-4">
              Our Comprehensive Services
            </h2>

            <p
              className="text-secondary mx-auto fs-5"
              style={{ maxWidth: "720px", lineHeight: "1.75" }}
            >
              We leverage Innovation and Technology to provide comprehensive
              support, from IT solutions and digital marketing to specialized
              victim and legal aid.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row row-cols-2 row-cols-lg-4 g-4 align-items-stretch">

            {services.map((service) => (
              <div className="col" key={service.id}>

                <div className="card text-bg-dark border-0 shadow position-relative overflow-hidden rounded-3 h-100">

                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                      filter: "brightness(1) saturate(1)",
                      transition: "transform 0.4s ease"
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.25), transparent)",
                      pointerEvents: "none",
                    }}
                  ></div>

                  {/* Outer Border */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-3"
                    style={{
                      border: "2px solid rgba(255,255,255,0.40)",
                      pointerEvents: "none",
                    }}
                  ></div>

                  {/* Inner Border */}
                  <div
                    className="position-absolute rounded-3"
                    style={{
                      top: "4px",
                      left: "4px",
                      right: "4px",
                      bottom: "4px",
                      border: "1px solid rgba(255,255,255,0.30)",
                      pointerEvents: "none",
                    }}
                  ></div>

                  {/* Title */}
                  <div className="card-img-overlay d-flex flex-column justify-content-end">

                    <h4
                      className="position-absolute bottom-0 start-0 end-0 px-2 py-2 fw-semibold text-white text-center rounded-bottom"
                      style={{
                        opacity: 1,
                        filter:
                          "drop-shadow(rgba(0, 0, 0, 0) 0px 0px 0px)",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        backdropFilter: "blur(0px)",
                        transform: "none",
                      }}
                    >
                      {service.title}
                    </h4>

                  </div>

                  {/* Clickable Area */}
                  <Link
                    to={service.link} 
                    className="stretched-link"
                    aria-label={service.title}
                  ></Link>

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Button */}
        <div className="d-flex justify-content-center mb-5">
          <button className="btn btn-primary rounded-pill btn-lg px-4 py-2">
            <i className="bi bi-arrow-left me-2"></i>
            Back To Home Console
          </button>
        </div>

      </main>

      {/* <Footer /> */}
    </>
  );
}