import React from 'react'

export default function reportWebVitals() {
  return (
    <>
             {/* footer */}
       <footer className="position-relative overflow-hidden bg-dark text-white border-top py-5">
         <div className="container">
           <div className="row g-4">
             {/* Column 1: Logo + Description */}
             <div className="col-12 col-md-6 col-lg-3">
               <div className="d-flex flex-column align-items-start">
                 <img
                   src="https://res.cloudinary.com/dstfxfxje/image/upload/v1766490115/office_logo-Photoroom_tzjoei.png"
                   width="80"
                   height="80"
                   alt="CRCCF Logo"
                   className="mb-3"
                 />
                 <p className="small">
                   CR Cyber Crime Foundation is highly professional and
                   efficient in their work. They not only create strong
                   awareness against cybercrimes but also deliver excellent IT
                   services like Java, Python, MERN stack development, SEO, and
                   digital marketing.
                 </p>
               </div>
             </div>

             {/* Column 2: Useful Links */}
             <div className="col-12 col-md-6 col-lg-3">
               <h5 className="mb-3">Useful Links</h5>
               <ul className="row g-2 list-unstyled">
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     Home
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     About us
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     Education & Internship
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     IT & Software
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     Gallery
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     Recruitment Process
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     Report a Cyber Crime
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     Resource & Download
                   </a>
                 </li>
                 <li className="col-6">
                   <a href="#" className="text-white text-decoration-none">
                     Contact Us
                   </a>
                 </li>
               </ul>
             </div>

             {/* Column 3: Office Address */}
             <div className="col-12 col-md-6 col-lg-3">
               <h5 className="mb-3">Office Address</h5>
               <ul className="list-unstyled  mb-0 small">
                 <li className="d-flex align-items-start gap-2 mb-2">
                   <i className="bi bi-geo-alt-fill me-2">
                     <fabell />
                   </i>
                   <span>
                     Head Office: Office No. 433, DLF Cyber City, Near Infocity,
                     Chandaka Industrial Estate, Patia, Bhubaneswar – 751024,
                     Odisha, India.
                   </span>
                 </li>
                 <li className="d-flex align-items-start gap-2 mb-2">
                   <i className="bi bi-telephone-fill me-2"></i>
                   <span>+91 9777999529</span>
                 </li>
                 <li className="d-flex align-items-start gap-2 mb-2">
                   <i className="bi bi-envelope-fill me-2"></i>
                   <span>hr@crcybercrime.org</span>
                 </li>
               </ul>
             </div>

             {/* Column 4: Additional Info */}
             <div className="col-12 col-md-6 col-lg-3">
               <h4 className="mb-3">Report Cyber Crime</h4>
               <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center shadow mt-2 mb-2">
                 <span>Emergency Report</span>
               </button>
               <h4 className='mt-2 mb-2'>Review Us</h4>
               <button className="btn btn-secondary w-100 d-flex align-items-center justify-content-center shadow mt-2">
                 <span>Add Your Review</span>
               </button>
             </div>
           </div>
         </div>
       </footer>
    </>
  )
}

