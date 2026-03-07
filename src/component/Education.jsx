import React from "react";
import ServiceCard from "./ServiceCard";

export default function Education() {
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
   
  ];

  

  return (
    <main className="container  py-5">
     
      
          <h1 className="display-6 fw-bold text-center text-dark mb-5">
            Training Programs
          </h1>
      

      <ServiceCard cards={educationCards} />
          
      
    
    </main>
  );
}
