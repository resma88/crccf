import React from "react";
import "./Contact.css";

// Example data for cards
const cardData = [
  {
    id: 1,
    title: "Feedback",
    description: "Submit detailed feedback on our services and platform.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881536/feedback_wmiv6u_grj75l.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Inquiry",
    description: "General questions and information requests about CRCCF.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881541/inquiry_cnjzq9_fpwjao.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Request",
    description: "Formal request for service enrollment or specific action.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881570/request_u2ydml_u8gqda.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Suggestion",
    description: "Propose new features or system improvements.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881579/suggestions_dbkcpc_rybv6v.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Branch Details",
    description: "Address, maps, and hours for our physical branches.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881530/branch_details_kof1gs_t9l0ja.jpg",
    link: "#",
  },
   {
    id: 6,
    title: "Follow Apps",
    description: "Links to our social profiles and mobile applications.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881574/Screenshot_2025-12-05_180904_m5xvdk_mugf01.png",
    link: "#",
  },
   {
    id: 7,
    title: "Contact Person",
    description: "Find direct contact information for department leads.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881533/contact_person_j9uyaj_ucnhex.jpg",
    link: "#",
  },
   {
    id: 8,
    title: "Help Desk",
    description: "Access our dedicated ticketing system for support.",
    image: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765881538/help_desk_hj0mmj_tjcjur.jpg",
    link: "#",
  },
];

export default function Contact() {
  return (
    <div className="container mb-3 py-4">
         <div className="mb-5">
              <h1 className="fw-bold  display-5 text-dark  text-center lh-1 custom-heading">
                Contact &{" "}
                <span className="text-primary">Support Hub</span>
              </h1>

              <p className="mt- text-center text-secondary fs-5 lh-lg ">
               Connect with the right department. Select an option below to get started.
              </p>
              </div>
      <div className="row g-4">
        {cardData.map((card) => (
          <div key={card.id} className="col-12 col-sm-6 col-md-3">
            <div
              className="card rounded-3 overflow-hidden shadow-sm h-100 position-relative custom-card"
              style={{ transformStyle: "preserve-3d", transition: "all 0.3s" }}
            >
              <a
                href={card.link}
                className="d-block h-100 w-100 position-relative text-decoration-none"
              >
                <div
                  className="position-relative w-100"
                  style={{ height: "15rem", maxHeight: "18rem" }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-img-top position-absolute top-0 start-0 w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                </div>

                <div className="card-body position-absolute bottom-0 start-0 end-0 text-center d-flex flex-column align-items-center justify-content-end p-3 rounded-bottom">
                  <h5 className="card-title text-white fw-bold mb-1">{card.title}</h5>
                  <p className="card-text text-light small opacity-75 text-truncate-two-lines mb-0">
                    {card.description}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}