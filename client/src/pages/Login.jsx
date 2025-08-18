import React from "react";
import userIcon from "../assets/icons/user-circle.png";
import passwordIcon from "../assets/icons/unlock-alt.png";
import eyeIcon from "../assets/icons/eye-slash.png";
import illustration from "../assets/illustration/form.svg";

import "../scss/pages/_form.scss";
//import "../scss/main.scss";

function Form() {
  // add class warning kung naay error and pass an error message
  return (
    <>
      <main>
        <form className="form-container">
          <section>
            <header>
              <h1>Login!</h1>
              <div>Sign in to your account</div>
            </header>

            <div className="input-section">
              <div className="username warning">
                <div>
                  <input type="text" />
                  <img src={userIcon} alt="icon" />
                </div>
                <div className="username-err err">Username is required</div>
              </div>

              <div className="password">
                <div>
                  <input type="text" />
                  <img src={passwordIcon} alt="icon" />
                  <img src={eyeIcon} alt="" />
                </div>
                <div className="password-err err"></div>
              </div>

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