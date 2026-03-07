import React from 'react'
import { Link } from "react-router-dom";

export default function SoftwareIt() {
   const services = [
    {
      id: 1,
      title: "Software Services Introduction",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765874121/Software_services_introduction_pg1ubn_x4i7oq.jpg",
      link: "/SoftwareIt_Intro",
    },
    {
      id: 2,
      title: "AMC Services (Annual Maintenance for Website, App & Software)",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765874094/AMC_serices_ccgzxj_mplbp0.jpg",
      link: "/SoftwareIt_Intro",
    },
    {
      id: 3,
      title: "End to end web development",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765874108/end_to_end_web_dev_rmwvb0_elhwue.jpg",
      link: "/CustomCard",
    },
    {
      id: 4,
      title: "Mobile Application Development (Android & iOS)",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765874095/Android_and_ios_vvevu4_dwqtjo.jpg",
      link: "/MobileAppDev",
    },
    {
      id: 5,
      title: "Desktop & Laptop Software Solutions",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765874107/Dextop_and_laptop_kemmha_n4v8js.jpg",
      link: "/DesktopSolution",
    },
    {
      id: 6,
      title: "Artificial Intelligence Solutions",
      image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765874093/AI_x0ezeu_qyqfkb.jpg",
      link:"/AiSolution",
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
              Software and IT Services
            </h2>

            <p
              className="text-secondary mx-auto fs-5"
              style={{ maxWidth: "720px", lineHeight: "1.75" }}
            >
             Providing cutting-edge solutions from web and mobile development to AI and dedicated maintenance (AMC) services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row row-cols-3 row-cols-lg-4 g-4 align-items-stretch">

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
        {/* <div className="d-flex justify-content-center mb-5">
          <button className="btn btn-primary rounded-pill btn-lg px-4 py-2">
            <i className="bi bi-arrow-left me-2"></i>
            Back To Home Console
          </button>
        </div>  */}

      </main>
      
    </>
  )
}
