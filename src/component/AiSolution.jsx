import React, { useState } from "react";
import "../App.css";



const AiSolution = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Array of all sections (your original JSX)
  const sections = [
    <section key={0}>
             <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                 <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                     <img src="" alt="image 1" className="img-fluid" />
                 </div>
                 <div className="col order-md-2 py-2 text-truncate">
                     <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                         Transforming Digital Operations Through Intelligent Automation
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
         </section>,

        <section key={1}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        2 – Our Vision: Safe Digital Spaces for All
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
                    <img src="" alt="image 2" className="img-fluid" />
                </div>
            </div>
        </section>,
        <section key={2}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 3" className="img-fluid" />
                </div>
                <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        3 – Empowering Citizens with Knowledge
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
        </section>,
        <section key={3}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        4 – Supporting Victims and Communities
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
                    <img src="" alt="image 4" className="img-fluid" />
                </div>
            </div>
        </section>,
        <section key={4}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 5" className="img-fluid" />
                </div>
                <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        5 – Technology, Education, and Innovation
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
        </section>, 
        <section key={5}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                       6 – Building Awareness Across Communities
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
                    <img src="" alt="image 4" className="img-fluid" />
                </div>
            </div>
        </section>,
        <section key={6}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 5" className="img-fluid" />
                </div>
                <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        7 – Welcome to CR CYBER CRIME FOUNDATION
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
        </section>, 
        <section key={3}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        4– Welcome to CR CYBER CRIME FOUNDATION
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
                    <img src="" alt="image 4" className="img-fluid" />
                </div>
            </div>
        </section>,
        <section key={2}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 5" className="img-fluid" />
                </div>
                <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        5 – Welcome to CR CYBER CRIME FOUNDATION
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
        </section>, 
        <section key={3}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        4– Welcome to CR CYBER CRIME FOUNDATION
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
                    <img src="" alt="image 4" className="img-fluid" />
                </div>
            </div>
        </section>,
        <section key={2}>
            <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-md-stretch">
                <div className="col border border-secondary rounded p-2 d-flex justify-content-center align-items-center">
                    <img src="" alt="image 5" className="img-fluid" />
                </div>
                <div className="col order-md-2 py-2 text-truncate">
                    <h2 className="fw-bold text-dark fs-5 fs-sm-4 fs-md-3 lh-sm lh-md">
                        5 – Welcome to CR CYBER CRIME FOUNDATION
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
        </section>, 
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(sections.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentSections = sections.slice(startIndex, startIndex + itemsPerPage);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage + 1 <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage + 1 >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <main className="flex-grow-1 position-relative custom-pt">
      <section className="position-relative container px-4 px-sm-5 py-4 py-sm-5 py-md-5 py-lg-5">
        <nav className="text-secondary mb-3 mb-sm-4 custom-nav-text">
          <a href="/" className="text-primary">Home</a>
          <span aria-hidden="true"> &gt; </span>
          
            <a href="/Service" className="text-primary">Service</a>
            <span aria-hidden="true"> &gt; </span>
          <span aria-current="page">AI Solution</span>
        </nav>

        <div className="row row-cols-1 row-cols-md-2 g-3 g-sm-4 g-md-5 align-items-center">
          <div>
            <h1 className="display-4 fw-bold text-dark lh-1 custom-heading">
              Advanced <span className="text-gradient">Artificial Intelligence</span>Solutions
            </h1>
            <p className="mt-3 text-secondary lh-lg custom-paragraph">
              Empowering organizations with intelligent automation, predictive insights, and adaptive learning systems. We turn data into decisions and routine into innovation.
            </p>
            <div className="mt-3 d-flex flex-wrap gap-2">
              <span className="px-3 py-1 custom-badge rounded-pill">Machine Learning</span>
              <span className="px-3 py-1 custom-badge rounded-pill ">Automation</span>
              <span className="px-3 py-1 custom-badge rounded-pill">Predictive Analyst</span>
              
            </div>
          </div>
          <div className="position-relative " style={{ width: "500px", height: "200px", backgroundColor: "lightblue" }}>
  <div className="position-absolute custom-blur  " >
    <div className="position-relative card-custom">
      <img src="" alt="" />
    </div>
  </div>
</div>
        </div>

         <nav aria-label="Section pagination" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            </li>
            {getPageNumbers().map((page, idx) => (
              <li key={idx} className={`page-item ${currentPage + 1 === page ? "active" : ""} ${page === "..." ? "disabled" : ""}`}>
                {page === "..." ? (
                  <span className="page-link">...</span>
                ) : (
                  <button className="page-link" onClick={() => setCurrentPage(page - 1)}>{page}</button>
                )}
              </li>
            ))}
            <li className={`page-item ${currentPage >= totalPages - 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
            </li>
          </ul>
        </nav>

        {/* Sections with divider */}
        <div className="mt-3">
          {currentSections.map((section, idx) => (
            <div key={idx} className="mb-4 pb-4 border-bottom">
              {section}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav aria-label="Section pagination" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            </li>
            {getPageNumbers().map((page, idx) => (
              <li key={idx} className={`page-item ${currentPage + 1 === page ? "active" : ""} ${page === "..." ? "disabled" : ""}`}>
                {page === "..." ? (
                  <span className="page-link">...</span>
                ) : (
                  <button className="page-link" onClick={() => setCurrentPage(page - 1)}>{page}</button>
                )}
              </li>
            ))}
            <li className={`page-item ${currentPage >= totalPages - 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

export default AiSolution;