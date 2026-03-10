import ItCard from "./ItCard";
import { Link } from "react-router-dom";

export default function Recruitment() {
  const cards = [
    {
      title: "Job Vacancy",
      description: "Explore current job openings at CRCCF.",
      linkText: "Learn More →",
      svgPath: "M4 7h16M4 12h16M4 17h16", // plus icon
       path: "/JobVacancy"
    },
    {
      title: "Recruitment Rules/Policies",
      description: "Understand the recruitment policies of CRCCF.",
      linkText: "Learn More →",
      svgPath: "M5 13l4 4L19 7" // check icon
    },
    {
      title: "Post Vacancy - Members Only",
      description: "Know the steps for successful recruitment.",
      linkText: "Learn More →",
      svgPath: "M4 21h16V7H4v14zM16 3h4v4h-4zM4 3h4v4H4z" // curve icon
    },
    {
      title: "Online Application Portal",
      description: "Apply for jobs through our online system.",
      linkText: "Learn More →",
      svgPath: "M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" // circle icon
    },
  ];

  return (
    <div className="mt-3 px-5">
        <h1 className="display-5 fw-bold text-center text-dark mb-2">
            Recruitment Portal — CRCCF
          </h1>
          <p className=" text-center text-secondary fs-5 lh-lg mx-auto "style={{ maxWidth: "800px" }}>Access and explore recruitment rules, career opportunities, official notices, selection process and track your application status — all in one place.</p>
    <div className="row g-4">
        <p className="text-center fs-6 text-uppercase fw-semibold text-secondary mb-2 mt-5" style={{ letterSpacing: '0.05em' }}>
  EXPLORE RECRUITMENT SECTION
</p>
      {cards.map((card, idx) => (
        <div key={idx} className="col-12 col-sm-6 col-lg-3">
            <Link to={card.path} className="text-decoration-none">
          <ItCard 
            title={card.title} 
            description={card.description} 
            linkText={card.linkText} 
            svgPath={card.svgPath} 
          />
             </Link>
        </div>
      ))}
    </div>
    </div>
  );
}