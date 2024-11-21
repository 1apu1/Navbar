import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0); // Tracks current form page
  const [formdata, setformdata] = useState({
    gmail: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    dob: "",
    nationality: "",
    fathername: "",
  });

  // Handles input changes in all form pages
  const handlechange = (e) => {
    let { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const formTitles = ["Sign Up Info", "Personal Info", "Other Info"];

  // Display corresponding form based on current page
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo
          formdata={formdata}
          handlechange={handlechange}
        />
      );
    } else if (page === 1) {
      return (
        <PersonalInfo
          formdata={formdata}
          handlechange={handlechange}
        />
      );
    } else if (page === 2) {
      return (
        <OtherInfo
          formdata={formdata}
          handlechange={handlechange}
        />
      );
    }
  };

  // Handle form submission when on last page
  const handleSubmit = () => {
    if (formdata.password !== formdata.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Form submitted successfully!");
    console.log(formdata); // Replace this with actual submission logic
  };

  return (
    <div className="container m-auto w-50 shadow">
      <div className="header text-center">
        <h1>{formTitles[page]}</h1>
      </div>
      <div className="form-body">
        {PageDisplay()}
      </div>
      <div className="form-footer text-center">
        <button
          className="btn btn-sm btn-outline-warning"
          disabled={page === 0}
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          Previous
        </button>

        <button
          className="btn btn-sm btn-outline-success"
          onClick={() => {
            if (page === formTitles.length - 1) {
              handleSubmit(); // Submit on the last page
            } else {
              setPage((prevPage) => prevPage + 1);
            }
          }}
        >
          {page === formTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Form;
