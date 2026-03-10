import React, { useState } from "react";

const AddressDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Present Address
    if (!values.presentAddress) newErrors.presentAddress = "Please enter present address";
    if (!values.presentCity) newErrors.presentCity = "Please enter city";
    if (!values.presentState) newErrors.presentState = "Please enter state";
    if (!values.presentPincode) {
      newErrors.presentPincode = "Please enter pincode";
    } else if (!/^\d{6}$/.test(values.presentPincode)) {
      newErrors.presentPincode = "Enter valid 6-digit pincode";
    }

    // Permanent Address
    if (!values.permanentAddress) newErrors.permanentAddress = "Please enter permanent address";
    if (!values.permanentCity) newErrors.permanentCity = "Please enter city";
    if (!values.permanentState) newErrors.permanentState = "Please enter state";
    if (!values.permanentPincode) {
      newErrors.permanentPincode = "Please enter pincode";
    } else if (!/^\d{6}$/.test(values.permanentPincode)) {
      newErrors.permanentPincode = "Enter valid 6-digit pincode";
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
      <h3>7. Address Details</h3>

      <h5>Present Address</h5>
      <div className="mb-3">
        <label>Address *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter present address"
          value={values.presentAddress || ""}
          onChange={handleChange("presentAddress")}
        />
        {errors.presentAddress && <small className="text-danger">{errors.presentAddress}</small>}
      </div>

      <div className="mb-3">
        <label>City *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={values.presentCity || ""}
          onChange={handleChange("presentCity")}
        />
        {errors.presentCity && <small className="text-danger">{errors.presentCity}</small>}
      </div>

      <div className="mb-3">
        <label>State *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter state"
          value={values.presentState || ""}
          onChange={handleChange("presentState")}
        />
        {errors.presentState && <small className="text-danger">{errors.presentState}</small>}
      </div>

      <div className="mb-3">
        <label>Pincode *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter 6-digit pincode"
          value={values.presentPincode || ""}
          onChange={handleChange("presentPincode")}
          maxLength={6}
        />
        {errors.presentPincode && <small className="text-danger">{errors.presentPincode}</small>}
      </div>

      <h5 className="mt-4">Permanent Address</h5>
      <div className="mb-3">
        <label>Address *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter permanent address"
          value={values.permanentAddress || ""}
          onChange={handleChange("permanentAddress")}
        />
        {errors.permanentAddress && <small className="text-danger">{errors.permanentAddress}</small>}
      </div>

      <div className="mb-3">
        <label>City *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={values.permanentCity || ""}
          onChange={handleChange("permanentCity")}
        />
        {errors.permanentCity && <small className="text-danger">{errors.permanentCity}</small>}
      </div>

      <div className="mb-3">
        <label>State *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter state"
          value={values.permanentState || ""}
          onChange={handleChange("permanentState")}
        />
        {errors.permanentState && <small className="text-danger">{errors.permanentState}</small>}
      </div>

      <div className="mb-3">
        <label>Pincode *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter 6-digit pincode"
          value={values.permanentPincode || ""}
          onChange={handleChange("permanentPincode")}
          maxLength={6}
        />
        {errors.permanentPincode && <small className="text-danger">{errors.permanentPincode}</small>}
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

export default AddressDetails;