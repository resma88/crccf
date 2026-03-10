import React, { useState } from "react";

const DocumentUpload = ({ prevStep, handleFileChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!values.resume) newErrors.resume = "Resume is required";
    if (!values.photo) newErrors.photo = "Photo is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(values); // You can send values to backend here
    }
  };

  return (
    <div className="container mt-4">
      <h3>8. Document Upload</h3>

      <div className="mb-3">
        <label>Upload Resume *</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => handleFileChange("resume", e.target.files[0])}
        />
        {errors.resume && <small className="text-danger">{errors.resume}</small>}
      </div>

      <div className="mb-3">
        <label>Upload Photo *</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => handleFileChange("photo", e.target.files[0])}
        />
        {errors.photo && <small className="text-danger">{errors.photo}</small>}
      </div>

      <div className="mb-3">
        <label>Other Documents (Optional)</label>
        <input
          type="file"
          className="form-control"
          multiple
          onChange={(e) => handleFileChange("otherDocs", e.target.files)}
        />
      </div>

      <button className="btn btn-secondary me-2" onClick={prevStep}>
        Previous
      </button>
      <button className="btn btn-success" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
};

export default DocumentUpload;
