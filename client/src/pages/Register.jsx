import { useEffect, useState } from "react";
const path = "../../src/assets/icons";
import profile from "../../src/assets/icons/user-plus.svg";
import email from "../../src/assets/icons/mail.svg";
import phone from "../../src/assets/icons/smartphone.svg";
import map from "../../src/assets/icons/map.svg";
import "../scss/pages/register.scss";
import Calendar from "../components/Calendar";
import "../scss/components/_calendar.scss";
import calendarIcon from "../assets/icons/calendar.png";

function Register() {
  const [modal, setModal] = useState(false);
  const [reg, setReg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    nationality: "",
  });

  const handleModal = () => {
    const calendar = document.querySelector(".calendar-wrapper");

    calendar.classList.add("active");
    setModal(true);
  };

  const handleFloat = (e) => {
    const value = e.target.value;
    const box = e.target.parentElement;

    value === ""
      ? box.classList.remove("hasValue")
      : box.classList.add("hasValue");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setReg((prev) => ({
      ...prev,
      [name]: value,
    }));

    handleFloat(e);

    console.log(reg);
  };

  const handleReg = (e) => {
    e.preventDefault();
    console.log(reg);
  };

  /*

  - First Name 
  - Last Name 

  - Email 
  - Phone 

  - DOB (Calendar-based)
  - Address 
  - Nationality 
  
  */

  return (
    <main className="register-account wrapper">
      <div>
        <section>
          <header>
            <h3>JOIN FOR FREE</h3>
            <h1>
              Lorem, ipsum dolor sit amet consectetur a Quasi!
              <span> Lorem, ipsum.</span>
              dipisicing elit.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, magni.
            </p>

            <button>Explore more</button>
          </header>
        </section>
        <form>
          <h1>Create new Account</h1>
          <div className="inputs">
            <div className="f-box box input border warning">
              <div>
                <input
                  type="text"
                  value={reg.firstName}
                  onChange={handleChange}
                  name="firstName"
                />
                <img src={profile} alt="" />

                <div className="placeholder">Enter first name</div>
              </div>
              <div className="err-reg">Enter first name</div>
            </div>

            <div className="box input">
              <div>
                <input
                  type="text"
                  value={reg.lastName}
                  onChange={handleChange}
                  name="lastName"
                />
                <img src={profile} alt="" />

                <div className="placeholder">Enter Last name</div>
              </div>
              <div className="err-reg">Enter first name</div>
            </div>

            <div className="box input">
              <div>
                <input
                  type="email"
                  value={reg.email}
                  onChange={handleChange}
                  name="email"
                />
                <img src={email} alt="" />

                <div className="placeholder">Email</div>
              </div>
              <div className="err-reg">Enter email</div>
            </div>

            <div className="box input">
              <div>
                <input
                  type="number"
                  value={reg.phone}
                  onChange={handleChange}
                  name="phone"
                />
                <img src={phone} alt="" />

                <div className="placeholder">Phone number</div>
              </div>
              <div className="err-reg">Required</div>
            </div>

            <div className="box dbo">
              <button type="button" onClick={handleModal}>
                <label>Date of Birth</label>
                <img src={calendarIcon} alt="" />
              </button>
              <input type="date" name="dob" onClick={handleModal} />
              <div className="err-reg">Invalid date</div>

              <Calendar modal={modal} setModal={setModal} setReg={setReg} />
            </div>

            <div className="box input ">
              <div>
                <input
                  type="text"
                  value={reg.address}
                  onChange={handleChange}
                  name="address"
                />
                <img src={map} alt="" />

                <div className="placeholder">Address</div>
              </div>
              <div className="err-reg">Required</div>
            </div>

            <div className="box nationality">
              <label htmlFor="nationality">Nationality:</label>

              <select id="nationality">
                <option value="Filipino">Filipino</option>
                <option value="Japanese">Japanese</option>
                <option value="American">American</option>
              </select>
            </div>

            <p className="login-q">
              Already have an account? <a href="#">Login</a>
            </p>

            <button className="btn" onClick={(e) => handleReg(e)}>
              Register
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
