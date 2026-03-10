import GalleryCard from "./GalleryCard";

export default function Gallery() {

  const galleryData = [
    {
      title: "Cyber Awareness Program",
      description: "Annual cybersecurity conference with 500+ attendees featuring keynote speakers f...",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tag: "Photos",
      date: "5/15/2023",
      event: "Events"
    },
    {
      title: "Digital Forensisi Case",
      description: "Successful resolution of a complex corporate data breach investigation.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tag: "Event",
      date: "3/222023",
      event: "Investigations"
    },
    {
      title: "Advance Threat Detection Workshop",
      description: "Hands-on training session for cybersecurity professionals on emerging threats..",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      tag: "Training",
      date: "4/10/2023",
      event: "Training"
    },
    {
      title: "Rural Cybersecurity Initiative",
      description: "Outreach program educating rural communities about online safety practices.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      tag: "Training",
      date: "2/52023",
      event: "Community"
    }
  ];

  return (
    <div className="container-fluid px-4 py-5">
          
           <div>
              <h1 className="fw-bold  display-4 text-dark  text-center lh-1 custom-heading">
                Explore Our{" "}
                <span className="text-gradient">Digital Gallery</span>
              </h1>

              <p className="mt- text-center text-secondary fs-5 lh-lg ">
                Witness our journey through impactful events, training programs, community initiatives,
                 and groundbreaking research in cybersecurity.
              </p>

              <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">

  {/* Left: Buttons */}
  <div className="d-flex flex-wrap gap-2 mt-3">
    <button className="btn btn-primary btn-sm px-4 py-2 rounded-pill shadow">
      All
    </button>
    <button className="btn btn-light btn-sm px-4 py-2 rounded-pill shadow">
      Event
    </button>
    <button className="btn btn-light btn-sm px-4 py-2 rounded-pill shadow">
      Investigation
    </button>
    <button className="btn btn-light btn-sm px-4 py-2 rounded-pill shadow">
      Training
    </button>
  </div>

  {/* Right: Search Bar */}
  <div className="position-relative" style={{ minWidth: "200px", maxWidth: "250px" }}>
    <input
      type="text"
      className="form-control rounded-pill ps-4 pe-3"
      placeholder="   Search Gallery..."
    />
    {/* Optional icon inside input */}
    <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
      <i class="bi bi-search"></i>
    </span>
  </div>

</div>
            </div>

      <div className="row g-3">

        {galleryData.map((item, index) => (
          <div className="col-6 col-md-6 col-lg-3" key={index}>
            <GalleryCard {...item} />
          </div>
        ))}

      </div>

    </div>
  );
}