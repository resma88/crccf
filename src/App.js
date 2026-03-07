
 import './App.css'; 
 import React from "react";
 import { Navigate } from "react-router-dom";
  import CardItem from "./component/CardItem"; 
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Herosection from './component/Herosection';
import Footer from './component/Footer';
import Service from './component/Service';
import SoftwareIt from "./component/SoftwareIt";
import SoftwareIt_Intro from './component/SoftwareIt_Intro';
import CustomCard from './component/CustomCard';
import MobileAppDev from './component/MobileAppDev';
import DesktopSolution from './component/DesktopSolution';
import AiSolution from './component/AiSolution';
import Activity from './component/Activity';
import About from './component/About';
import Education from './component/Education';
import Gallery from './component/Gallery';
import ITService from './component/ItService';

  function App() {
     const cardsData = [
      { title: "Our Introduction ",
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870558/introduction_to_crccf_cj6n8z_n6jmzu.avif ",
          description: "Learn more about who we are and what we do.", 
          link: "/Introduction", }, 
      { title: "Our Service",
          imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870569/Services_of_CRCCF_ydvoca_ara0zj.avif",  
          description: "Some quick example text for card 2.", 
          link: "/Service", },
      { title: "Our Mission and Vission", 
        imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870561/mission_and_vision_etuaei_smfekl.avif", 
        description: "Some quick example text for card 3.", 
        link: "#", }, 
      { title: "What We Do", 
        imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870571/what_we_do_q1uqgi_fjznk3.avif", 
        description: "Some quick example text for card 4.", 
        link: "#", }, 
     { title: "Our Purpose", 
          imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870567/purpose_of_crccf_sz4pjf_zfjm6t.avif", 
          description: "", 
          link: "#", },

     { title: "Our Activities", 
            imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870556/Activities_of_CRCCF_yj6jqe_dgnt7p.avif", 
            description: "", 
            link: "/Activity", }, 
     { title: "Our Objectives", 
              imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870561/Objectives_of_CRCCF_vxwlpl_btdszo.avif", 
              description: "Learn more about who we are and what we do.", 
              link: "/about", }, 

     { title: "Our Achievements", 
           imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870562/Our_Achievements_gc1y1d_d6wbu9.avif", 
                description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Legal and Compliance", 
          imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870563/Our_Departments_at8ifr_zreia8.avif", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Departments", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870563/Our_Departments_at8ifr_zreia8.avif", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Privacy Policy", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870567/Privacy_Policy_ksttiy_xj9tae.avif", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Data Protection Policy", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870556/Data_Protection_Policy_dtzoon_xywpnt.avif", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "GDPR Compliance ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870556/GDPR_Compliance_lcxptc_uzyan6.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Terms and Conditions ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870570/Terms_and_Conditions_of_CRCCF_dwyjep_c3i5do.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Rules and Regulations ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870569/Rules_and_Regulations_of_CRCCF_cetbl0_nzwmex.avif", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Guidelines ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870557/Guidelines_of_CRCCF_t0g9mj_j1zvci.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Instructions ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870557/Instructions_eassak_ao5jjc.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Story ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870564/Our_Story_d5pdim_iyiylc.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our History ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870564/Our_History_jybssn_t9n7fn.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Team ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870566/Our_Team_jmcn2z_b2nwia.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Success Case Stories ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870565/Our_Success_Case_Stories_wjeafa_yelwlr.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: " Case Studies", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870556/Case_Studies_cpl7ic_x4bqw4.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "News and Events ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870561/News_and_Events_jcw2lo_ernmrk.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Legal Disclaimer of CRCCF ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870558/Legal_Disclaimer_of_CRCCF_o6z9hc_xh4ixo.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Copyright Registration of CRCCF ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870557/Copyright_Registration_of_CRCCF_hrok0i_iwe6o3.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Partnerships and Collaborations ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870566/Partnerships_and_Collaborations_dreuih_g6dju3.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Legal Support ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870558/Legal_Support_glzjy7_s9ntpw.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Client ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870562/Our_Clients_odhbjk_jupdlp.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "IT Support ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870558/IT_SUPPOT_qf4jiu_vnanlz.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Our Students ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870564/Our_Students_irbtwb_jp9sjf.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Cyber Crime Safety Tip ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870557/Cybercrime_Safety_Tips_solb4v_jt8b1n.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Technical Assistance ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870569/Technical_Assistance_zvefwt_pbtfik.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Cyber Crime Prevention ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870557/Cybercrime_Prevention_ft8ngk_xc48c8.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Innovation and Technology ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870557/Innovation_and_Technology_kjnbmx_s0n1dz.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Media and Press Coverage ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870560/Media_and_Press_Coverage_dejezt_qjyr97.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Future Roadmap ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870556/Future_Roadmap_aonty2_gwask2.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Membership Opportunities ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870561/Membership_Opportunities_j4gdpe_fwer7h.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Emergency Response Desk ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870556/Emergency_Response_Desk_eczi9d_1_b64eme.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Review ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870568/Reviews_vtyl5e_dujttg.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
      { title: "Testimonials ", 
         imgSrc: "https://res.cloudinary.com/drtqqfegh/image/upload/v1765870570/Testimonials_jydfmn_iulyvs.avif ", description: "Learn more about who we are and what we do.", link: "/about", }, 
              ];


   return (
     <>
       <Navbar />
       
       <div className=""></div>
       
       <Router>
         <Routes>
           <Route
             path="/"
             element={
               <>
                <Herosection />
               <div className="position-relative d-flex flex-grow-1 pt-4 pt-md-5">
                 <div className="container px-3 px-sm-4 px-lg-5">
                   <div className="text-center mx-auto mb-5 mb-sm-5">
                     <span className="text-primary fw-bold fs-6 text-uppercase">
                       Our Expertise
                     </span>
                     <h2 className="fw-bold text-dark fs-3 mt-2 mt-sm-3 mb-3 mb-sm-4">
                       {" "}
                       Comprehensive Cyber Solution
                     </h2>
                     <div
                       className="mx-auto bg-primary rounded-pill mb-4 "
                       style={{ height: "4px", width: "40px" }}
                     ></div>
                   </div>
                   <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-sm-4 g-lg-5">
                     {cardsData.map((card, index) => (
                       <CardItem
                         key={index}
                         title={card.title}
                         imgSrc={card.imgSrc}
                         description={card.description}
                         link={card.link}
                       />
                     ))}
                   </div>
                   <div className="position-relative mt-5 mt-sm-5 mt-lg-5 bg-dark rounded-4 p-4 p-sm-5 p-lg-5 text-center text-white overflow-hidden shadow-lg">
                     <div
                       className="position-relative z-10 mx-auto"
                       style={{ maxWidth: "72rem" }}
                     >
                       <h3 className="display-6 fw-bold mb-3">
                         Ready to Secure Your Organization?
                       </h3>

                       <p className="lead mb-4 mx-5">
                         Our cybersecurity experts are available 24/7 to assess
                         your needs, provide real-time threat intelligence, and
                         deliver customized defense strategies.
                       </p>

                       <button className="btn btn-primary rounded-pill btn-lg px-4 py-2">
                         Contact Our Team
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
               </>
             }
           />

           <Route path="/Introduction" element={<Intro />} />
           <Route path="/Service" element={<Service />} />
           <Route path="*" element={<Navigate to="/" />} />
           <Route path="/Activity" element={<Activity />} />

           {/* Service Detail Pages */}
        <Route path="/SoftwareIt" element={<SoftwareIt />} />
        <Route path="/SoftwareIt_Intro" element={<SoftwareIt_Intro />} />
        <Route path="/SoftwareIt_Intro" element={<SoftwareIt_Intro />} />
        <Route path="/CustomCard" element={<CustomCard />} />
        <Route path="/MobileAppDev" element={<MobileAppDev />} />
        <Route path="/DesktopSolution" element={<DesktopSolution />} />
        <Route path="/AiSolution" element={<AiSolution />} />

        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/ItService" element={<ITService />} />
         </Routes>
       </Router>
       <div className="my-5"></div>
       {/* footer */}
         <Footer/>
     </>
   );
   }
    export default App;                       