import React, { useState } from "react";

const ResidentialDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!values.residingSince) {
      newErrors.residingSince = "Please enter the year you started residing here";
    } else if (!/^\d{4}$/.test(values.residingSince)) {
      newErrors.residingSince = "Enter a valid 4-digit year";
    }

    if (!values.residentialType) {
      newErrors.residentialType = "Please select residential type";
    }

    if (!values.stayingWith) {
      newErrors.stayingWith = "Please select staying arrangement";
    }

    if (!values.distanceFromOffice) {
      newErrors.distanceFromOffice = "Please enter distance from office";
    } else if (isNaN(values.distanceFromOffice) || values.distanceFromOffice < 0) {
      newErrors.distanceFromOffice = "Enter a valid positive number";
    }

    if (!values.dailyCommute) {
      newErrors.dailyCommute = "Please select daily commute method";
    }

    if (!values.knownRelatives) {
      newErrors.knownRelatives = "Please enter relatives or 'None'";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const continueStep = (e) => {
    e.preventDefault();
    if (validate()) nextStep();
  };

  return (
    <div className="container mt-4">
      <h3>4. Residential Information</h3>

      <div className="mb-3">
        <label>Residing Since (Year) *</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., 1998"
          value={values.residingSince || ""}
          onChange={handleChange("residingSince")}
        />
        {errors.residingSince && (
          <small className="text-danger">{errors.residingSince}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Residential Type *</label>
        <select
          className="form-control"
          value={values.residentialType || ""}
          onChange={handleChange("residentialType")}
        >
          <option value="">Select Type</option>
          <option>Owned</option>
          <option>Rented</option>
          <option>Company Provided</option>
          <option>Other</option>
        </select>
        {errors.residentialType && (
          <small className="text-danger">{errors.residentialType}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Staying With *</label>
        <select
          className="form-control"
          value={values.stayingWith || ""}
          onChange={handleChange("stayingWith")}
        >
          <option value="">Select Option</option>
          <option>Family</option>
          <option>Friends</option>
          <option>Alone</option>
          <option>Other</option>
        </select>
        {errors.stayingWith && (
          <small className="text-danger">{errors.stayingWith}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Distance from Office (in km) *</label>
        <input
          type="number"
          className="form-control"
          placeholder="e.g., 10"
          value={values.distanceFromOffice || ""}
          onChange={handleChange("distanceFromOffice")}
        />
        {errors.distanceFromOffice && (
          <small className="text-danger">{errors.distanceFromOffice}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Daily Commute Method *</label>
        <select
          className="form-control"
          value={values.dailyCommute || ""}
          onChange={handleChange("dailyCommute")}
        >
          <option value="">Select Method</option>
          <option>Walking</option>
          <option>Bicycle</option>
          <option>Bus</option>
          <option>Car</option>
          <option>Train</option>
          <option>Other</option>
        </select>
        {errors.dailyCommute && (
          <small className="text-danger">{errors.dailyCommute}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Known Relatives in Same City *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name & Relation (or 'None')"
          value={values.knownRelatives || ""}
          onChange={handleChange("knownRelatives")}
        />
        {errors.knownRelatives && (
          <small className="text-danger">{errors.knownRelatives}</small>
        )}
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

export default ResidentialDetails;