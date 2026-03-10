import React, { useState } from "react";

const PersonalityDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!values.personalityType) {
      newErrors.personalityType = "Please select a personality type";
    }

    if (!values.familyType) {
      newErrors.familyType = "Please select a family type";
    }

    if (!values.totalFamilyMembers) {
      newErrors.totalFamilyMembers = "Please enter total family members";
    } else if (isNaN(values.totalFamilyMembers) || values.totalFamilyMembers <= 0) {
      newErrors.totalFamilyMembers = "Enter a valid positive number";
    }

    if (!values.hobbies) {
      newErrors.hobbies = "Please list at least one hobby";
    }

    if (!values.weakness) {
      newErrors.weakness = "Please list at least one weakness";
    }

    if (!values.strength) {
      newErrors.strength = "Please list at least one strength";
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
      <h3>5. Personality & Lifestyle</h3>

      <div className="mb-3">
        <label>Personality Type *</label>
        <select
          className="form-control"
          value={values.personalityType || ""}
          onChange={handleChange("personalityType")}
        >
          <option value="">Select Type</option>
          <option>Introvert</option>
          <option>Extrovert</option>
          <option>Ambivert</option>
          <option>Other</option>
        </select>
        {errors.personalityType && (
          <small className="text-danger">{errors.personalityType}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Family Type *</label>
        <select
          className="form-control"
          value={values.familyType || ""}
          onChange={handleChange("familyType")}
        >
          <option value="">Select Type</option>
          <option>Nuclear</option>
          <option>Joint</option>
          <option>Extended</option>
          <option>Other</option>
        </select>
        {errors.familyType && (
          <small className="text-danger">{errors.familyType}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Total Family Members *</label>
        <input
          type="number"
          className="form-control"
          placeholder="e.g., 4"
          value={values.totalFamilyMembers || ""}
          onChange={handleChange("totalFamilyMembers")}
        />
        {errors.totalFamilyMembers && (
          <small className="text-danger">{errors.totalFamilyMembers}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Hobbies *</label>
        <textarea
          className="form-control"
          placeholder="e.g., Coding, reading books, playing cricket"
          value={values.hobbies || ""}
          onChange={handleChange("hobbies")}
        />
        {errors.hobbies && (
          <small className="text-danger">{errors.hobbies}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Weakness *</label>
        <textarea
          className="form-control"
          placeholder="e.g., Public speaking"
          value={values.weakness || ""}
          onChange={handleChange("weakness")}
        />
        {errors.weakness && (
          <small className="text-danger">{errors.weakness}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Strength *</label>
        <textarea
          className="form-control"
          placeholder="e.g., Problem solving, time management"
          value={values.strength || ""}
          onChange={handleChange("strength")}
        />
        {errors.strength && (
          <small className="text-danger">{errors.strength}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Personal Motto or Life Goal (Optional)</label>
        <textarea
          className="form-control"
          placeholder="Enter your personal motto or life goal"
          value={values.personalMotto || ""}
          onChange={handleChange("personalMotto")}
        ></textarea>
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

export default PersonalityDetails;
