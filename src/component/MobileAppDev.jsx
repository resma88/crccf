import React from "react";
import ServiceCard from "./ServiceCard";

export default function MobileAppDev() {
  const educationCards = [
    {
      title: "Manage Attendance",
      description:
        "Manage attendance, homework, results, and parent-teacher communication on one platform.",
      svgPaths: ["M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z",
        "M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
      ],
    },
    {
      title: "Homework Management",
      description:
        "Track assignments, submission dates, and give feedback efficiently.",
      svgPaths:[ "M4.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0zM7.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0zM10.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0zM13.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0zM19.5 2.25a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75zM16.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0V3.75a.75.75 0 00-1.5 0z",]
    },
    {
      title: "Results & Reports",
      description:
        "Generate performance reports and analytics for students easily.",
      svgPaths: "M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z",
    },
    {
      title: "Parent-Teacher Communication",
      description:
        "Send notifications, messages, and updates to parents seamlessly.",
      svgPaths:[ "M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 9a.75.75 0 01.75-.75h6.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.75zm0-3.75a.75.75 0 01.75-.75h6.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.75zM7.5 6.75a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H7.5z",]
    },
    {
      title: "Parent-Teacher Communication",
      description:
        "Send notifications, messages, and updates to parents seamlessly.",
      svgPaths:[ "M12.75 3a.75.75 0 00-1.5 0v2.25h1.5V3zM8.25 3a.75.75 0 00-1.5 0v2.25h1.5V3zM12.75 21a.75.75 0 00-1.5 0v-2.25h1.5v2.25zM8.25 21a.75.75 0 00-1.5 0v-2.25h1.5v2.25zM3 8.25a.75.75 0 000 1.5h2.25V8.25H3zM3 12.75a.75.75 0 000 1.5h2.25v-1.5H3zM21 8.25a.75.75 0 000 1.5h-2.25V8.25H21zM21 12.75a.75.75 0 000 1.5h-2.25v-1.5H21zM17.25 3a.75.75 0 00-1.5 0v2.25h1.5V3zM17.25 21a.75.75 0 00-1.5 0v-2.25h1.5v2.25zM3 17.25a.75.75 0 000 1.5h2.25v-1.5H3zM21 17.25a.75.75 0 000 1.5h-2.25v-1.5H21z",]
    },
  ];

  const healthcareCards = Array.from({ length: 12 }, () => ({
    title: "Healthcare Management",
    description:
      "Manage hospital workflow, patients, appointments and reports.",
    svgPaths: ["M12.75 3a.75.75 0 00-1.5 0v2.25h1.5V3zM8.25 3a.75.75 0 00-1.5 0v2.25h1.5V3zM12.75 21a.75.75 0 00-1.5 0v-2.25h1.5v2.25zM8.25 21a.75.75 0 00-1.5 0v-2.25h1.5v2.25zM3 8.25a.75.75 0 000 1.5h2.25V8.25H3zM3 12.75a.75.75 0 000 1.5h2.25v-1.5H3zM21 8.25a.75.75 0 000 1.5h-2.25V8.25H21zM21 12.75a.75.75 0 000 1.5h-2.25v-1.5H21zM17.25 3a.75.75 0 00-1.5 0v2.25h1.5V3zM17.25 21a.75.75 0 00-1.5 0v-2.25h1.5v2.25zM3 17.25a.75.75 0 000 1.5h2.25v-1.5H3zM21 17.25a.75.75 0 000 1.5h-2.25v-1.5H21z",]
  }));

  return (
    <main className="container  py-5">
      <div
        className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-center mt-3  "
        style={{ marginBottom: "150px" }}
      >
        <div>
          <h1 className=" display-2 fw-bold text-dark lh-1 custom-heading">
            Your Vision, <span className="text-danger">in Their Hands</span>
          </h1>
          <p className="mt-3 text-secondary lh-lg custom-paragraph">
            High-performance iOS and Android applications that bring your ideas to life.
          </p>
        </div>
        <div
          className="position-relative "
          style={{
            width: "500px",
            height: "200px",
            backgroundColor: "lightblue",
          }}
        >
          <div className="position-absolute custom-blur  ">
            <div className="position-relative card-custom">
             
            </div>
          </div>
        </div>
      </div>

      <h2 className="fs-2 fs-md-1 fw-bold text-dark mb-4 pb-2 border-bottom d-flex align-items-center">
        <span
          className="d-none d-md-block me-2"
          style={{
            width: "8px",
            height: "32px",
            backgroundColor: "#eb4415",
            borderRadius: "9999px",
          }}
        ></span>
        Education & E-Learnings App
      </h2>
      <ServiceCard cards={educationCards} />
         
       <h2 className="fs-2 fs-md-1 fw-bold text-dark mb-4 pb-2 border-bottom d-flex align-items-center mt-5">
        <span
          className="d-none d-md-block me-2"
          style={{
            width: "8px",
            height: "32px",
            backgroundColor: "#eb4415",
            borderRadius: "9999px",
          }}
        ></span>
        m-Health & Medical App
      </h2>  
      
      <ServiceCard cards={healthcareCards} />
    </main>
  );
}

