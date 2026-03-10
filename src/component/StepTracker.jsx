import React from "react";

const StepTracker = ({ step }) => {
  const steps = [
    "Personal Details",
    "Educational & Professional",
    "Language & Communication",
    "Residential Information",
    "Personality & Lifestyle",
    "Identification Details",
    "Address",
    "Document Upload",

  ];

  return (
    <div className="container mb-4">
      <div className="d-flex flex-wrap justify-content-between">

        {steps.map((label, index) => {
          const stepNumber = index + 1;

          return (
            <div
              key={index}
              className="text-center m-1"
              style={{ width: "150px" }}
            >
              <div
                style={{
                  width: "35px",
                  height: "35px",
                  lineHeight: "30px",
                  borderRadius: "50%",
                  margin: "auto",
                  backgroundColor:
                    step >= stepNumber ? "#0d6efd" : "#dee2e6",
                  color: step >= stepNumber ? "#fff" : "#000",
                  fontWeight: "bold",
                }}
              >
                {stepNumber}
              </div>

              <small>{label}</small>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default StepTracker;