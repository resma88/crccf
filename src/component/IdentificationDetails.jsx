import React, { useState } from "react";

const IdentificationDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Aadhaar: 12 digits
    if (!values.aadhaar) {
      newErrors.aadhaar = "Aadhaar Number is required";
    } else if (!/^\d{12}$/.test(values.aadhaar)) {
      newErrors.aadhaar = "Aadhaar must be 12 digits";
    }

    // PAN: 5 letters + 4 digits + 1 letter
    if (!values.pan) {
      newErrors.pan = "PAN Number is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.pan.toUpperCase())) {
      newErrors.pan = "Invalid PAN format (e.g., ABCDE1234F)";
    }

    // Optional fields: Driving License, Voter ID, Passport
    // No validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const continueStep = (e) => {
    e.preventDefault();
    if (validate()) nextStep();
  };

  return (
    <div className="container mt-4">
      <h3>7. Identification Details</h3>

      <div className="mb-3">
        <label>Aadhaar Card Number *</label>
        <input
          type="text"
          className="form-control"
          placeholder="1234 5678 9012"
          value={values.aadhaar || ""}
          onChange={handleChange("aadhaar")}
          maxLength={12}
        />
        {errors.aadhaar && <small className="text-danger">{errors.aadhaar}</small>}
      </div>

      <div className="mb-3">
        <label>PAN Card Number *</label>
        <input
          type="text"
          className="form-control"
          placeholder="ABCDE1234F"
          value={values.pan || ""}
          onChange={handleChange("pan")}
          maxLength={10}
        />
        {errors.pan && <small className="text-danger">{errors.pan}</small>}
      </div>

      <div className="mb-3">
        <label>Driving License Number (Optional)</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Driving License Number"
          value={values.drivingLicense || ""}
          onChange={handleChange("drivingLicense")}
        />
      </div>

      <div className="mb-3">
        <label>Voter ID Number (Optional)</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Voter ID"
          value={values.voterId || ""}
          onChange={handleChange("voterId")}
        />
      </div>

      <div className="mb-3">
        <label>Passport Number (Optional)</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Passport Number"
          value={values.passport || ""}
          onChange={handleChange("passport")}
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

export default IdentificationDetails;