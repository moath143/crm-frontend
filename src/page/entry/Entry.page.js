import React, { useState } from "react";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
import LoginForm from "../../components/login/Login.comp";
import ResetPassword from "../../components/password-reset/PasswordReset.comp";
function Entry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("fill up all the form");
    }

    //TODO: CAll api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please fill your email");
    }

    //TODO: CAll api to submit the form
    console.log(email);
  };

  const formLoadSwitcher = (type) => {
    setFormLoad(type);
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <LoginForm
            email={email}
            password={password}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formLoadSwitcher={formLoadSwitcher}
          />
        )}
        {formLoad === "reset" && (
          <ResetPassword
            email={email}
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formLoadSwitcher={formLoadSwitcher}
          />
        )}
      </Jumbotron>
    </div>
  );
}

export default Entry;
