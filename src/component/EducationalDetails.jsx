import React, { useState } from "react";

const EducationalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const [error, setError] = useState("");

  const continueStep = (e) => {
    e.preventDefault();

    if (
      !values.graduation ||
      !values.university ||
      !values.passingYear ||
      !values.percentage
    ) {
      setError("Please complete educational details");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="container mt-4  border rounded shadow-sm px-3 py-3">
      <h3>2. Educational Details</h3>

      {error && <p className="text-danger">{error}</p>}

      <div className="mb-3">
        <label>Graduation *</label>
        <input
          className="form-control"
          value={values.graduation}
          onChange={handleChange("graduation")}
        />
      </div>

      <div className="mb-3">
        <label>University *</label>
        <input
          className="form-control"
          value={values.university}
          onChange={handleChange("university")}
        />
      </div>

      <div className="mb-3">
        <label>Passing Year *</label>
        <input
          type="number"
          className="form-control"
          value={values.passingYear}
          onChange={handleChange("passingYear")}
        />
      </div>

      <div className="mb-3">
        <label>Percentage *</label>
        <input
          type="number"
          className="form-control"
          value={values.percentage}
          onChange={handleChange("percentage")}
        />
      </div>

      <button className="btn btn-secondary me-2" onClick={prevStep}>
        Previous
      </button>

      <button className="btn btn-primary" onClick={continueStep}>
        Next
      </button>
    </div>
  );
};

export default EducationalDetails;