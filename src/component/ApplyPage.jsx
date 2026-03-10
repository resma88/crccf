 import React from "react";

import { useParams, Link } from "react-router-dom";


// const jobs = [
//   {
//     id: "frontend-developer",
//     title: "frontend-developer",
//     description: "Develop and maintain responsive, high-performance user interfaces for our public-facing and internal web applications.",
//   },
//   {
//     id: "backend-developer",
//     title: "backend-developer",
//     description: "Design, build, and maintain the server-side logic, databases, and APIs that power our foundation's digital infrastructure.",
//   },
//   {
//     id: "fullstack-developer",
//     title: "fullstack-developer",
//     description: "Take end-to-end ownership of features, from database design and API development to frontend implementation and deployment.",
//   },
// ];

// export default function ApplyPage() {
//   const { jobId } = useParams();
//   const job = jobs.find((j) => j.id === jobId);

//   if (!job) return <p>Job not found!</p>;

//   return (
//     <div className="container my-5">
//       <h1>{job.title}</h1>
//       <p>{job.description}</p>

//       <form>
//         <div className="mb-3">
//           <label>Name</label>
//           <input className="form-control" type="text" required />
//         </div>
//         <div className="mb-3">
//           <label>Email</label>
//           <input className="form-control" type="email" required />
//         </div>
//         <div className="mb-3">
//           <label>Resume</label>
//           <input className="form-control" type="file" required />
//         </div>
//         <button className="btn btn-primary">Submit Application</button>
//       </form>
//     </div>
//   );
// }





// import React from "react";
// import { useParams, Link } from "react-router-dom";

const jobs = [
  {
    id: "fullstack-developer",
    title: "Fullstack Developer (MERN)",
    department: "IT Department",
    location: "Bhubaneswar, Odisha",
    profile: "Take end-to-end ownership of features, from database design and API development to frontend implementation and deployment.",
    responsibilities: [
      "Design and develop scalable web applications using the MERN stack.",
      "Manage the complete software development lifecycle, from concept to deployment.",
      "Work with cross-functional teams to deliver new features.",
      "Troubleshoot, debug, and upgrade existing systems."
    ],
    requirements: {
      education: "Bachelor's in Computer Science",
      experience: "4+ years as a Fullstack Developer",
      skills: "Expert in MongoDB, Express.js, React.js, and Node.js (MERN)",
      additional: "Knowledge of DevOps, CI/CD pipelines, and microservices architecture.",
      language: "English (Advanced)",
      typingSpeed: "Not required",
      ageLimit: "25 - 38 years",
      gender: "Any",
      eligibility: "Minimum 4 years of demonstrable experience in MERN stack development."
    },
    compensation: {
      yearlyCTC: "₹8,00,000 - ₹14,00,000",
      salaryNote: "Calculated based on CTC",
      benefits: "Competitive salary, Health Insurance, PF, and leadership training.",
      growth: "Transition to Technical Architect, Team Lead, or Project Manager."
    },
    recruitment: {
      process: "Resume Screening -> Live Coding Round -> System Design Interview -> HR Interview",
      rounds: 3,
      mode: "Online (Technical) & In-person (System Design + HR)",
      submission: "Online Portal Only",
      documents: "Resume, Cover Letter, GitHub/Portfolio showcasing full-stack projects."
    },
    guidelines: {
      instruction: "Your portfolio must clearly state your contribution to both frontend and backend.",
      jobGuidelines: "Must be willing to work on-site in Bhubaneswar.",
      notice: "This is a high-ownership role. Please apply only if you are comfortable managing features end-to-end."
    },
    jobSummary: {
      code: "CRCCF-IT-003",
      type: "Full-time",
      workMode: "On-site",
      hours: "40 hours/week (Mon-Fri)",
      vacancies: 1,
      applicationEnds: "2025-12-10",
      fees: "None"
    }
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    department: "IT Department",
    location: "Bhubaneswar, Odisha",
    profile: "Responsible for backend systems, APIs, and database management.",
    responsibilities: [
      "Develop and maintain REST APIs.",
      "Manage databases and data models.",
      "Collaborate with frontend developers."
    ],
    requirements: {  },
    compensation: {  },
    recruitment: { },
    guidelines: { },
       jobSummary: {
      code: "CRCCF-IT-002",
      type: "Full-time",
      workMode: "On-site",
      hours: "40 hours/week (Mon-Fri)",
      vacancies: 5,
      applicationEnds: "2025-12-10",
      fees: "None"
    }
  },
  {
    id: "frontend-developer",
    title: "Frontend-Developer",
    department: "IT Department",
    location: "Bhubaneswar, Odisha",
    profile: "Explore current job openings at CRCCF.",
    responsibilities: [],
    requirements: {},
    compensation: {},
    recruitment: {},
    guidelines: {},
       jobSummary: {
      code: "CRCCF-IT-001",
      type: "Full-time",
      workMode: "Hybrid (Bhubaneswar)",
      hours: "40 hours/week (Mon-Fri)",
      vacancies: 2,
      applicationEnds: "2025-12-10",
      fees: "None"
    }
  }
];

export default function ApplyPage() {
  const { jobId } = useParams();
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="container my-5">
        <h2>Job not found!</h2>
        <Link to="/JobVacancy">Back to All Vacancies</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Link to="/JobVacancy" className="btn btn-secondary mb-4">Back to All Vacancies</Link>
      <div className="row">
        {/* Left Column: Job Content */}
        <div className="col-12 col-lg-7 mb-4 mb-lg-0">
          <h1 className="fw-bold">{job.title}</h1>
          <p className="text-muted">{job.department} • {job.location}</p>

          <section className="mb-4">
            <h3>Job Profile</h3>
            <p>{job.profile}</p>
          </section>

          {job.responsibilities && job.responsibilities.length > 0 && (
            <section className="mb-4">
              <h3>Key Responsibilities</h3>
              <ul>
                {job.responsibilities.map((r, idx) => <li key={idx}>{r}</li>)}
              </ul>
            </section>
          )}

          {job.requirements && Object.keys(job.requirements).length > 0 && (
            <section className="mb-4">
                <h2>Full Job Details</h2>
              <h4>Requirements</h4>
               <hr style={{ border: "1.5px solid black", margin: "20px 0" }} />
              <ul>
                {Object.entries(job.requirements).map(([key, val]) => (
                  <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{val}</li>
                ))}
              </ul>
            </section>
          )}

          {job.compensation && Object.keys(job.compensation).length > 0 && (
            <section className="mb-4">
              <h4>Compensation & Benefits</h4>
               <hr style={{ border: "1.5px solid black", margin: "20px 0" }} />
              <ul>
                {Object.entries(job.compensation).map(([key, val]) => (
                  <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{val}</li>
                ))}
              </ul>
            </section>
          )}

          {job.recruitment && Object.keys(job.recruitment).length > 0 && (
            <section className="mb-4">
              <h4>Recruitment Process</h4>
              <hr style={{ border: "1.5px solid black", margin: "20px 0" }} />
              <ul>
                {Object.entries(job.recruitment).map(([key, val]) => (
                  <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{val}</li>
                ))}
              </ul>
            </section>
          )}

          {job.guidelines && Object.keys(job.guidelines).length > 0 && (
            <section className="mb-4">
              <h4>Guidelines & Notices</h4>
               <hr style={{ border: "1.5px solid black", margin: "20px 0" }} />
              <ul>
                {Object.entries(job.guidelines).map(([key, val]) => (
                  <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>{val}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column: Apply Form */}
         <div className="col-12 col-lg-5">
          <section className="p-4 border rounded shadow-sm">
            <h3>Job Summary</h3>
            <ul className="list-unstyled px-3">
              <li><strong>Job Code:</strong> </li>
              <li>{job.jobSummary?.code || "N/A"}</li>
              <li><strong>Job Type:</strong> </li>
              <li>{job.jobSummary.type || "N/A"}</li>
              <li><strong>Work Mode:</strong> </li>
              <li>{job.jobSummary.workMode || "N/A"}</li>
              <li><strong>Working Hours:</strong></li><li> {job.jobSummary.hours || "N/A"}</li>
              <li><strong>Vacancies:</strong> </li><li>{job.jobSummary.vacancies || "N/A"}</li>
              <li><strong>Application Ends:</strong> </li><li>{job.jobSummary.applicationEnds || "N/A"}</li>
              <li><strong>Application Fees:</strong> </li><li>{job.jobSummary.fees || "N/A"}</li>
            </ul>

         <Link to="/ApplicationForm">
  <button className="btn btn-primary w-100 mt-3">
    Agree & Register Now
  </button>
</Link>
          </section>
        </div>
      </div>
    </div>
  );
}