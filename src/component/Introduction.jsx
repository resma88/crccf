import React from "react";
import "../App.css";

const Introduction = () => {
  return (
    <main className="flex-grow-1 position-relative custom-pt">
      <div className="">
        <section className="position-relative container px-4 px-sm-5 px-md-5 py-4 py-sm-5 py-md-5 py-lg-5">
          <nav className="text-secondary mb-3 mb-sm-4 custom-nav-text">
            <a href="/" className="text-primary ">
              Home </a>
            <span aria-hidden="true"> &gt; </span>
            <span aria-current="page">Introduction</span>
          </nav>
          <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-center">
            <div>
              <h1 className="fw-bold text-dark lh-1 custom-heading">
                Building a <span className="text-gradient">
                  Secure Digital Future
                </span>
              </h1>
              <p className="mt-3 text-secondary lh-lg custom-paragraph">
                Welcome to CRCCF. We are dedicated to creating a safe, inclusive, and empowered digital world for every citizen, student, and organization.
              </p>
              <div className="mt-3 d-flex flex-wrap gap-2">
                <span className=" px-3 py-1 custom-badge">Trust</span>
                <span className=" px-3 py-1 custom-badge">Safety</span>
                <span className=" px-3 py-1 custom-badge">Empowerment</span>
                <span className=" px-3 py-1 custom-badge">Education</span>
              </div>
            </div>

            <div className="position-relative" style={{ width: "200px", height: "100px", backgroundcolor: " lightblue" }}>
              <div className="position-absolute custom-blur">
                <div className="position-relative card-custom">
                  <img src=""  ></img>
                </div>
              </div>

            </div>
          </div>
          <div className="mt-5 mt-sm-5">
            {/* pagination */}
          </div>

          <div className="mt-3 divide-y">
            <section className="section-custom">
              <section>
                <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                  <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 1"className="img-fluid  " />
                  </div>

                  <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                      1 – Welcome to CR CYBER CRIME FOUNDATION
                    </h2>
                    <div className="mt-2 mt-sm-3 d-flex flex-column gap-3">
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Welcome to CR CYBER CRIME FOUNDATION (CRCCF), where technology meets trust 🌐💙.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Our foundation is dedicated to protecting every citizen, student, woman, girl, NGO, government body, and organization from the ever-evolving world of cyber threats 🛡.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        We believe that digital safety is not a privilege but a right for everyone, and our mission is to make cyberspace secure, transparent, and accessible for all 🌏✨.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Through awareness programs, education, technical training, and cybercrime prevention initiatives, we empower our community to detect, prevent, and act against online threats.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        At CRCCF, we stand by every victim, every learner, and every volunteer, ensuring no one feels isolated or unprotected 💪💻.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Join us in building a safer digital world, where knowledge, support, and vigilance come together to safeguard the online environment for everyone.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Together, we can make cyberspace a trustworthy, empowering, and inspiring place 🌟🎓.
                      </p>

                    </div>

                  </div>
                </div>
              </section>
            </section>
            <section className="section-custom">
              <section>
                <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">

                  <div className="col  text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                      1 – Welcome to CR CYBER CRIME FOUNDATION
                    </h2>
                    <div className="mt-2 mt-sm-3 d-flex flex-column gap-3">
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Welcome to CR CYBER CRIME FOUNDATION (CRCCF), where technology meets trust 🌐💙.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Our foundation is dedicated to protecting every citizen, student, woman, girl, NGO, government body, and organization from the ever-evolving world of cyber threats 🛡.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        We believe that digital safety is not a privilege but a right for everyone, and our mission is to make cyberspace secure, transparent, and accessible for all 🌏✨.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Through awareness programs, education, technical training, and cybercrime prevention initiatives, we empower our community to detect, prevent, and act against online threats.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        At CRCCF, we stand by every victim, every learner, and every volunteer, ensuring no one feels isolated or unprotected 💪💻.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Join us in building a safer digital world, where knowledge, support, and vigilance come together to safeguard the online environment for everyone.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Together, we can make cyberspace a trustworthy, empowering, and inspiring place 🌟🎓.
                      </p>

                    </div>

                  </div>
                   <div className="col order-md-2 py-2 border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 1"className="img-fluid  " />
                  </div>
                </div>
              </section>
            </section>
            <section className="section-custom">
               <section>
                <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                  <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 1"className="img-fluid  " />
                  </div>

                  <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                      1 – Welcome to CR CYBER CRIME FOUNDATION
                    </h2>
                    <div className="mt-2 mt-sm-3 d-flex flex-column gap-3">
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Welcome to CR CYBER CRIME FOUNDATION (CRCCF), where technology meets trust 🌐💙.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Our foundation is dedicated to protecting every citizen, student, woman, girl, NGO, government body, and organization from the ever-evolving world of cyber threats 🛡.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        We believe that digital safety is not a privilege but a right for everyone, and our mission is to make cyberspace secure, transparent, and accessible for all 🌏✨.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Through awareness programs, education, technical training, and cybercrime prevention initiatives, we empower our community to detect, prevent, and act against online threats.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        At CRCCF, we stand by every victim, every learner, and every volunteer, ensuring no one feels isolated or unprotected 💪💻.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Join us in building a safer digital world, where knowledge, support, and vigilance come together to safeguard the online environment for everyone.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Together, we can make cyberspace a trustworthy, empowering, and inspiring place 🌟🎓.
                      </p>

                    </div>

                  </div>
                </div>
              </section>
            </section>
            <section className="section-custom">
               <section>
                <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">

                  <div className="col  text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                      1 – Welcome to CR CYBER CRIME FOUNDATION
                    </h2>
                    <div className="mt-2 mt-sm-3 d-flex flex-column gap-3">
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Welcome to CR CYBER CRIME FOUNDATION (CRCCF), where technology meets trust 🌐💙.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Our foundation is dedicated to protecting every citizen, student, woman, girl, NGO, government body, and organization from the ever-evolving world of cyber threats 🛡.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        We believe that digital safety is not a privilege but a right for everyone, and our mission is to make cyberspace secure, transparent, and accessible for all 🌏✨.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Through awareness programs, education, technical training, and cybercrime prevention initiatives, we empower our community to detect, prevent, and act against online threats.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        At CRCCF, we stand by every victim, every learner, and every volunteer, ensuring no one feels isolated or unprotected 💪💻.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Join us in building a safer digital world, where knowledge, support, and vigilance come together to safeguard the online environment for everyone.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Together, we can make cyberspace a trustworthy, empowering, and inspiring place 🌟🎓.
                      </p>

                    </div>

                  </div>
                   <div className="col order-md-2 py-2 border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 1"className="img-fluid  " />
                  </div>
                </div>
              </section>
            </section>
            <section className="section-custom">
               <section>
                <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                  <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 1"className="img-fluid  " />
                  </div>

                  <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                      1 – Welcome to CR CYBER CRIME FOUNDATION
                    </h2>
                    <div className="mt-2 mt-sm-3 d-flex flex-column gap-3">
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Welcome to CR CYBER CRIME FOUNDATION (CRCCF), where technology meets trust 🌐💙.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Our foundation is dedicated to protecting every citizen, student, woman, girl, NGO, government body, and organization from the ever-evolving world of cyber threats 🛡.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        We believe that digital safety is not a privilege but a right for everyone, and our mission is to make cyberspace secure, transparent, and accessible for all 🌏✨.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Through awareness programs, education, technical training, and cybercrime prevention initiatives, we empower our community to detect, prevent, and act against online threats.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        At CRCCF, we stand by every victim, every learner, and every volunteer, ensuring no one feels isolated or unprotected 💪💻.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Join us in building a safer digital world, where knowledge, support, and vigilance come together to safeguard the online environment for everyone.
                      </p>
                      <p className="mb-0 fs-6 fs-sm-5 text-secondary lh-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
                        Together, we can make cyberspace a trustworthy, empowering, and inspiring place 🌟🎓.
                      </p>

                    </div>

                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Introduction;