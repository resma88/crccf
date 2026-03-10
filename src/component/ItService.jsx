import ItCard from "./ItCard";

export default function ItService() {
  const cards = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet unique business needs.",
      linkText: "Learn More →",
      svgPath: "M4 7h16M4 12h16M4 17h16" // plus icon
    },
    {
      title: "Web & Mobile App Development",
      description: "High-performance, responsive apps for web and mobile platforms.",
      linkText: "Learn More →",
      svgPath: "M5 13l4 4L19 7" // check icon
    },
    {
      title: "Enterprise Solution (CRM/ERP)",
      description: "Integrated enterprise systems for seamless business operations.",
      linkText: "Learn More →",
      svgPath: "M4 21h16V7H4v14zM16 3h4v4h-4zM4 3h4v4H4z" // curve icon
    },
    {
      title: "AI, Big Data & Analytics",
      description: "Unlock insights with advanced AI and analytics solutions.",
      linkText: "Learn More →",
      svgPath: "M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" // circle icon
    },
  ];

  return (
    <div className="mt-3 px-5">
        <h1 className="display-8 fw-bold text-center text-dark mb-5">
            Our Software Services
          </h1>
    <div className="row g-4">
      {cards.map((card, idx) => (
        <div key={idx} className="col-12 col-sm-6 col-lg-3">
          <ItCard 
            title={card.title} 
            description={card.description} 
            linkText={card.linkText} 
            svgPath={card.svgPath} 
          />
        </div>
      ))}
    </div>
    </div>
  );
}