import React from 'react'
import { useEffect, useState } from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";

export default function Navbar() {
    const [time, setTime] = useState(new Date());
     const [menuOpen, setMenuOpen] = useState(false);
    // Update time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format time in IST
    const formattedTime =
        new Intl.DateTimeFormat("en-IN", {
            timeZone: "Asia/Kolkata",
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).format(time).replace(",", "") + " IST";
 

    return (
        <>
        
            <div className="bg-dark text-white py-2 px-4 small ">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-4  ">

                    <marquee className="flex-grow-1 w-100 w-md-auto fw-lighter ">
                        <span className="fw-bold">Welcome to CR Cyber Crime Foundation</span> — one of the best organizations in India. With 24/7 dedication, CR Cyber Crime strives to secure justice for cyber fraud victims, protect digital rights, and provide legal and technical assistance.
                    </marquee>

                    <span className="text-nowrap border border-light-subtle px-2 py-1 rounded ">
                        {formattedTime}
                    </span>

                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                        <img
                            src="https://res.cloudinary.com/dstfxfxje/image/upload/v1766490115/office_logo-Photoroom_tzjoei.png"
                            width="40"
                            height="40"
                            alt="CRCCF Logo"
                        />

                        <div className="d-flex flex-column lh-1">
                            <span className="fw-bold">CRCCF</span>
                            <span className="small text-muted">CR Cyber Crime Foundation</span>
                        </div>
                    </a>
                      

                       <div className="d-flex justify-content-between align-items-center p-3">
                      
                            {/* Desktop Menu (Hidden on Mobile) */}
                            <div className="d-none d-xl-flex align-items-center gap-4 ">
                              <div className="d-flex align-items-center gap-3 ">
                                <a href="/" className="nav-link hover-blue ">Home</a>
                                <a href="/About" className="nav-link hover-blue">About Us</a>
                                <a href="/Education" className="nav-link hover-blue">Education</a>
                                <a href="/Gallery" className="nav-link hover-blue">Gallery</a>
                                <a href="/ItService" className="nav-link hover-blue">IT Service</a>
                                <a href="/" className="nav-link hover-blue">Resource</a>
                                <a href="/" className="nav-link hover-blue">Recruitment</a>
                                <a href="/" className="nav-link hover-blue">Contact</a>
                              </div>
                      
                              <div className="d-flex align-items-center gap-2 ps-4 border-start">
                                <button className="btn btn-light">
                                  <FaSearch />
                                </button>
                                <button className="btn btn-light">
                                  <FaBell />
                                </button>
                                <button className="btn btn-primary rounded-pill">
                                  Report Crime
                                </button>
                              </div>
                            </div>
                      
                            {/* Mobile Menu (Visible below XL) */}
                            <div className="d-flex d-xl-none align-items-center gap-2">
                      
                              {/* Search Button */}
                              <button className="btn p-2 text-secondary">
                                <FaSearch />
                              </button>
                      
                              {/* Notification Button */}
                              <button className="btn position-relative p-2 text-muted hover-blue">
                                <FaBell />
                              </button>
                      
                              {/* Menu Button */}
                              <button
                                className="btn p-2 ms-1 text-dark bg-light rounded-circle"
                                onClick={() => setMenuOpen(!menuOpen)}
                              >
                                <FaBars />
                              </button>
                            </div>
                      
                           
                            {menuOpen && (
  <div className={`mobile-menu ${menuOpen ? "show" : ""} d-xl-none`}>
    <a href="/" className="d-block">Home</a>
    <a href="/About" className="d-block">About Us</a>
    <a href="/Education" className="d-block">Education</a>
    <a href="/Gallery" className="d-block">Gallery</a>
    <a href="/ItService" className="d-block">IT Service</a>
    <a href="/" className="d-block">Resource</a>
    <a href="/" className="d-block">Recruitment</a>
    <a href="/" className="d-block">Contact</a>
    <button className="btn btn-primary mt-2">Report Crime</button>
  </div>
)}
                      
                          </div>


                </div>
            </nav>
        </>
    )
}
