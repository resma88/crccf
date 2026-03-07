export default function ItCard({ title, description, linkText, svgPath }) {
  return (
    <div className="card border border-secondary shadow-sm rounded-3 p-4 h-100 d-flex flex-column justify-content-between">
      
      {/* Top section: icon + content */}
      <div className="d-flex align-items-start mb-3">
        {/* Icon circle with SVG */}
        <div className="flex-shrink-0 w-14 h-14 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={svgPath} />
          </svg>
        </div>

        {/* Text content */}
        <div className="d-flex flex-column">
          <h2 className="h6 fw-semibold text-dark">{title}</h2>
          <p className="text-secondary mt-2 mb-0 flex-grow-1">{description}</p>
        </div>
      </div>

      {/* Link */}
      <a href="#" className="mt-3 text-primary fw-medium text-decoration-none">
        {linkText}
      </a>
    </div>
  );
}