import { useEffect, useState } from "react";
import profile from "../../src/assets/icons/user-circle.png";
import "../scss/pages/register.scss";

function Register() {
  const [reg, setReg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    nationality: "",
  });

  useEffect(() => {}, [reg]);

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
        <section></section>
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
                <img src={profile} alt="" />

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
                <img src={profile} alt="" />

                <div className="placeholder">Phone number</div>
              </div>
              <div className="err-reg">Required</div>
            </div>

            <div className="box">
              <input type="date" name="dob" />
              <div className="err-reg">Invalid date</div>
            </div>

            <div className="box input">
              <div>
                <input
                  type="text"
                  value={reg.address}
                  onChange={handleChange}
                  name="address"
                />
                <img src={profile} alt="" />

                <div className="placeholder">Address</div>
              </div>
              <div className="err-reg">Required</div>
            </div>

            <div className="box">
              <label htmlFor="nationality">Nationality:</label>

              <select id="nationality">
                <option value="Filipino">Filipino</option>
                <option value="Japanese">Japanese</option>
                <option value="American">American</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Register;
