import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationalDetails from "./EducationalDetails";
import StepTracker from "./StepTracker";
import LanguageDetails from "./LanguageDetails";
import ResidentialDetails from "./ResidentialDetails";
import PersonalityDetails from "./PersonalityDetails ";
import IdentificationDetails from "./IdentificationDetails";
import AddressDetails from "./AddressDetails";
import DocumentUpload from "./DocumentUpload";

function ApplicationForm() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    graduation: "",
    university: "",
    passingYear: "",
    percentage: "",
    motherTongue: "",
    languagesKnown: "",
    preferredLanguage: "",
    handedness: "",

    residingSince: "",
    residentialType: "",
    stayingWith: "",
    distanceFromOffice: "",
    dailyCommute: "",
    knownRelatives: "",

    personalityType: "",
    familyType: "",
    totalFamilyMembers: "",
    hobbies: "",
    weakness: "",
    strength: "",
    personalMotto: "",

    aadhaar: "",
    pan: "",
    drivingLicense: "",
    voterId: "",
    passport: "",

    presentAddress: "",
    presentCity: "",
    presentState: "",
    presentPincode: "",
    permanentAddress: "",
    permanentCity: "",
    permanentState: "",
    permanentPincode: "",
    resume: null,
    photo: null,
    otherDocs: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleFileChange = (field, file) => {
  setFormData({
    ...formData,
    [field]: file
  });
};

  return (
    <div className="container py-4">

      <StepTracker step={step} />

      {step === 1 && (
        <PersonalDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      )}

      {step === 2 && (
        <EducationalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      )}

      {step === 3 && (
        <LanguageDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      )}

      {step === 4 && (
        <ResidentialDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          />
      )}

      {step === 5 && (
        <PersonalityDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={formData}
        />
      )}

      {step === 6 && (
        <IdentificationDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={formData}
        />
      )}
        {step === 7 && (
        <AddressDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={formData}
        />
      )}
      {step === 8 && (
        <DocumentUpload
        prevStep={prevStep}
        handleFileChange={handleFileChange}
        values={formData}
        />
      )}
    </div>
  );
}

export default ApplicationForm;