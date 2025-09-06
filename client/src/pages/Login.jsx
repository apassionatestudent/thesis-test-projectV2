import React from "react";
import userIcon from "../assets/icons/user-circle.png";
import passwordIcon from "../assets/icons/unlock-alt.png";
import eyeIcon from "../assets/icons/eye-slash.png";
import illustration from "../assets/illustration/form.svg";
import profile from "../assets/icons/user-circle.png";

import "../scss/pages/form.scss";
//import "../scss/main.scss";

function Form() {
  // add class warning kung naay error and pass an error message

  const handleFloat = (e) => {
    const value = e.target.value;
    const box = e.target.parentElement;

    value === ""
      ? box.classList.remove("hasValue")
      : box.classList.add("hasValue");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // setReg((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));

    handleFloat(e);
  };

  return (
    <>
      <main className="login">
        <form className="form-container">
          <section>
            <header>
              <h1>Login!</h1>
              <div>Sign in to your account</div>
            </header>

            <div className="input-section">
              {/* <div className="username warning">
                <div>
                  <input type="text" />
                  <img src={userIcon} alt="icon" />
                </div>
                <div className="username-err err">Username is required</div>
              </div> */}

              <div className="inputs">
                <div className="f-box box input border">
                  <div>
                    <input type="text" onChange={handleChange} />
                    <img src={profile} alt="" />

                    <div className="placeholder">Enter first name</div>
                  </div>
                  <div className="err-reg">Enter first name</div>
                </div>

                <div className="f-box box input border warning">
                  <div>
                    <input
                      type="password"
                      onChange={handleChange}
                      name="password"
                    />
                    <img src={passwordIcon} alt="" />

                    <div className="placeholder">Password</div>
                  </div>
                  <div className="err-reg">Password is required</div>
                </div>
              </div>
              {/* 
              <div className="password">
                <div>
                  <input type="text" />
                  <img src={passwordIcon} alt="icon" />
                  <img src={eyeIcon} alt="" />
                </div>
                <div className="password-err err"></div>
              </div> */}

              <div className="remember-section">
                <div>
                  <input type="checkbox" name="remember" />{" "}
                  <label htmlFor="remember">Remember</label>
                </div>
                <div>Forgot password?</div>
              </div>

              <button type="submit">SIGN IN</button>
              <div>
                Don't have an account? <a href="/register">Register</a>
              </div>
            </div>
          </section>
          <aside>
            {/* <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur ratione autem ut libero incidunt. Accusantium, illo?
            </p> */}
            <img src={illustration} alt="" />
          </aside>
        </form>
      </main>
    </>
  );
}

export default Form;
