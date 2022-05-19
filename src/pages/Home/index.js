import { useState } from "react";

import Checklist from "../../components/Checklist";

import "./styles.css";

function Home() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // booleans for password validations
  const [containsUL, setContainsUL] = useState(false); // uppercase letter
  const [containsLL, setContainsLL] = useState(false); // lowercase letter
  const [containsN, setContainsN] = useState(false); // number
  const [containsSC, setContainsSC] = useState(false); // special character
  const [contains8C, setContains8C] = useState(false); // min 8 characters
  const [passwordMatch, setPasswordMatch] = useState(false); // passwords match

  // checks all validations are true
  const [allValid, setAllValid] = useState(false);

  // labels and state boolean corresponding to each validation
  const mustContainData = [
    ["An uppercase letter (a-z)", containsUL],
    ["A lowercase letter (A-Z)", containsLL],
    ["A number (0-9)", containsN],
    ["A special character (!@#$)", containsSC],
    ["At least 8 characters", contains8C],
    ["Passwords match", passwordMatch],
  ];

  const validatePassword = () => {
    // has uppercase letter
    if (password.toLowerCase() != password) setContainsUL(true);
    else setContainsUL(false);

    // has lowercase letter
    if (password.toUpperCase() != password) setContainsLL(true);
    else setContainsLL(false);

    // has number
    if (/\d/.test(password)) setContainsN(true);
    else setContainsN(false);

    // has special character
    if (/[~`!#@$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password))
      setContainsSC(true);
    else setContainsSC(false);

    // has 8 characters
    if (password.length >= 8) setContains8C(true);
    else setContains8C(false);

    // passwords match
    if (password !== "" && password === confirmPassword) setPasswordMatch(true);
    else setPasswordMatch(false);

    // all validations passed
    if (
      containsUL &&
      containsLL &&
      containsN &&
      containsSC &&
      contains8C &&
      passwordMatch
    ) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Update password</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyUp={validatePassword}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm password</label>
                  <input
                    type="text"
                    id="confirm-password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyUp={validatePassword}
                  />
                </div>
                {mustContainData.map((data, index) => (
                  <Checklist key={index} data={data} />
                ))}
                <button
                  type="button"
                  className="btn btn-update btn-block"
                  disabled={!allValid}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
