import { useState } from "react";
// import "./Validation.css";
// import toast, { Toaster } from "react-hot-toast";

function Validation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (verify()) {
      toast.success("Form submitted successfully!", {
        position: "top-left",
      });
      setSubmittedData({ name, email, password, confirmPassword });
    } else {
      toast.error("Please fill out all fields", {
        position: "top-left",
      });
    }
  };

  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  function verify() {
    let valid = true;

    if (!name) {
      valid = false;
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1000);
    }

    if (!email) {
      valid = false;
    } else if (!regex.test(email)) {
      valid = false;
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1000);
    }

    if (!password) {
      valid = false;
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1000);
    }

    if (!(password === confirmPassword)) {
      valid = false;
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 1000);
    }

    return valid;
  }

  return (
    <div>
      <Toaster />
      <div className="w-25 h-100 m-auto border border-secondary p-5 container">
        <form className="m-2 form-container" onSubmit={handleSubmit}>
          <label htmlFor="nam">Name:</label>
          <input
            type="text"
            id="nam"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {showAlert && <p className="text-danger">Please enter your name</p>}
          <br />
          <label htmlFor="em">Email:</label>
          <input
            type="text"
            id="em"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showAlert && <p className="text-danger">Please enter your email</p>}
          <br />
          <label htmlFor="pas">Password:</label>
          <input
            type="password"
            id="pas"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showAlert && (
            <p className="text-danger">Please enter your password</p>
          )}
          <label htmlFor="confirmPas">Confirm Password:</label>
          <input
            type="password"
            id="confirmPas"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          {showAlert && <p className="text-danger">Passwords do not match</p>}
          <div style={{ textAlign: "center" }}>
            <input className="m-3" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <center>
        {submittedData && (
          <div className="submitted-data mt-4" class="submit">
            <h3>Submitted Data:</h3>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Password:</strong>
              <span className="password-dots">
                {"•".repeat(submittedData.password.length)}
              </span>
            </p>
            <p>
              <strong>Confirm Password:</strong>
              <span className="password-dots">
                {"•".repeat(submittedData.confirmPassword.length)}
              </span>
            </p>
          </div>
        )}
      </center>
    </div>
  );
}

export default Validation;
