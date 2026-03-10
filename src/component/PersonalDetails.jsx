import React, { useState } from "react";

const PersonalDetails = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!values.fullName) {
      newErrors.fullName = "Full Name is required";
    } else if (values.fullName.length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters";
    }else if (!/^[a-zA-Z\s]+$/.test(values.fullName)) {
    newErrors.fullName = "Only letters allowed";
    }
    if (!values.fatherName) {
      newErrors.fatherName = "Father Name is required";
    } else if (values.fatherName.length < 3) {
      newErrors.fatherName = "Father Name must be at least 3 characters";
    }

    if (!values.motherName) {
      newErrors.motherName = "Mother Name is required";
    } else if (values.motherName.length < 3) {
      newErrors.motherName = "Mother Name must be at least 3 characters";
    }

    if (!values.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(values.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!values.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!values.gender) {
      newErrors.gender = "Please select gender";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const continueStep = (e) => {
    e.preventDefault();

    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="container mt-4 border rounded shadow-sm px-3 py-3  ">
      <h3>1. Personal Details</h3>

      <div className="mb-3">
        <label>Full Name *</label>
        <input
          className="form-control"
          value={values.fullName}
          onChange={handleChange("fullName")}
          placeholder="e.g Subhankar Jena"
        />
        {errors.fullName && (
          <small className="text-danger">{errors.fullName}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Father Name *</label>
        <input
          className="form-control"
          value={values.fatherName}
          onChange={handleChange("fatherName")}
        />
        {errors.fatherName && (
          <small className="text-danger">{errors.fatherName}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Mother Name *</label>
        <input
          className="form-control"
          value={values.motherName}
          onChange={handleChange("motherName")}
        />
        {errors.motherName && (
          <small className="text-danger">{errors.motherName}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Phone Number *</label>
        <input
          type="text"
          className="form-control"
          value={values.phone}
          onChange={handleChange("phone")}
        />
        {errors.phone && (
          <small className="text-danger">{errors.phone}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Email *</label>
        <input
          type="email"
          className="form-control"
          value={values.email}
          onChange={handleChange("email")}
          placeholder="e.g abc@123gmail.com"
        />
        {errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Date of Birth *</label>
        <input
          type="date"
          className="form-control"
          value={values.dob}
          onChange={handleChange("dob")}
        />
        {errors.dob && (
          <small className="text-danger">{errors.dob}</small>
        )}
      </div>

      <div className="mb-3">
        <label>Gender *</label>
        <select
          className="form-control"
          value={values.gender}
          onChange={handleChange("gender")}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        {errors.gender && (
          <small className="text-danger">{errors.gender}</small>
        )}
      </div>

      <button className="btn btn-primary" onClick={continueStep}>
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;