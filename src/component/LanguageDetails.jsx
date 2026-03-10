import React, { useState } from "react";

const LanguageDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!values.motherTongue) {
      newErrors.motherTongue = "Mother Tongue is required";
    }

    if (!values.languagesKnown || values.languagesKnown.length === 0) {
      newErrors.languagesKnown = "Please select at least one language";
    }

    if (!values.preferredLanguage) {
      newErrors.preferredLanguage = "Preferred Language is required";
    }

    if (!values.handedness) {
      newErrors.handedness = "Please select handedness";
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
      <h3>3. Language & Communication</h3>

      <div className="mb-3">
        <label>Nickname (Optional)</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter nickname"
          value={values.nickname || ""}
          onChange={handleChange("nickname")}
        />
      </div>

      <div className="mb-3">
        <label>Mother Tongue *</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., Odia"
          value={values.motherTongue || ""}
          onChange={handleChange("motherTongue")}
        />
        {errors.motherTongue && (
          <small className="text-danger">{errors.motherTongue}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Languages Known (Read, Write, Speak) *</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g., English, Hindi, Odia"
          value={values.languagesKnown || ""}
          onChange={handleChange("languagesKnown")}
        />
        {errors.languagesKnown && (
          <small className="text-danger">{errors.languagesKnown}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Preferred Language for Communication *</label>
        <select
          className="form-control"
          value={values.preferredLanguage || ""}
          onChange={handleChange("preferredLanguage")}
        >
          <option value="">Select Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Odia</option>
          <option>Other</option>
        </select>
        {errors.preferredLanguage && (
          <small className="text-danger">{errors.preferredLanguage}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Handedness *</label>
        <select
          className="form-control"
          value={values.handedness || ""}
          onChange={handleChange("handedness")}
        >
          <option value="">Select Option</option>
          <option>Right-handed</option>
          <option>Left-handed</option>
          <option>Ambidextrous</option>
        </select>
        {errors.handedness && (
          <small className="text-danger">{errors.handedness}</small>
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

export default LanguageDetails;