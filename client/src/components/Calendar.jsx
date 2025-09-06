import React, { useEffect, useState } from "react";
import "../scss/components/_calendar.scss";
import Years from "./Years";
import iconCalendar from "../assets/illustration/calendar.png";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Calendar({ modal, setModal, setReg }) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selected, setSelected] = useState(null);

  const handleClick = () => {
    let value = `Month: ${months[month]}, Days: ${selected}, Year: ${year}`;

    setReg((prev) => ({
      ...prev,
      dob: value,
    }));

    setModal(false);
    console.log(value);
  };

  window.addEventListener("click", (e) => {
    if (!e.target.matches("select")) {
      document
        .querySelectorAll("select")
        .forEach((elem) => elem.classList.remove("active"));
    }
  });

  const handleDrop = (e) => {
    e.target.classList.toggle("active");
  };

  const handleSelect = (e) => {
    const target = e.target.classList;

    if (e.target.classList.contains("active")) {
      target.add("active");
    } else {
      target.remove("active");
    }

    if (target.contains("select-month")) {
      setMonth(Number(e.target.value));
    }

    if (target.contains("select-year")) {
      setYear(Number(e.target.value));
    }

    console.log(target.contains("select-month"));
  };

  const daysInMonthTest = (m, y, goal) => {
    let result;

    // pa down ang result
    if (goal === "daysInMonths") {
      result = new Date(y, m, 0).getDate();
      return Array.from({ length: result }, (_, i) => i + 1);
    }

    if (goal === "dayStart") {
      result = new Date(y, m, 1).getDay();

      return Array.from({ length: result }, (_, i) => result - i);
    }
  };

  return (
    <div className={modal ? "calendar-wrapper active" : "calendar-wrapper"}>
      <div className="calendar">
        <h1>Select Date</h1>
        <div className="choices-wrapper">
          <div className="options">
            <select
              value={month}
              onClick={(e) => handleDrop(e)}
              onChange={(e) => handleSelect(e)}
              className="select-month"
            >
              {months.map((m, i) => (
                <option value={i} key={i}>
                  {m}
                </option>
              ))}
            </select>

            {/* {<Years today={today} year={year} setYear={setYear} />} */}

            <select
              value={year}
              onChange={(e) => handleSelect(e)}
              onClick={(e) => handleDrop(e)}
              className="select-year"
            >
              {Array.from(
                { length: today.getFullYear() - 1999 + 1 },
                (_, i) => 1999 + i
              ).map((y) => (
                <option value={y} key={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="month-indicator"></div>
        </div>

        <div className="grid">
          <div className="weeks">
            {["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"].map((week) => (
              <span key={week}>{week}</span>
            ))}
          </div>

          <div className="days">
            {daysInMonthTest(month, year, "dayStart").map((d, i) => (
              <div className="empty" key={i}></div>
            ))}

            {daysInMonthTest(month, year, "daysInMonths").map((d) => (
              <div key={d} className={`${selected === d ? "selected" : ""}`}>
                <span onClick={() => setSelected(d)}>{d}</span>
              </div>
            ))}
          </div>
        </div>

        <button type="button" onClick={handleClick}>
          Confirm
        </button>

        <div className="month-icon">
          <div className="wrapper">
            <img src={iconCalendar} alt="" />
            <h2>{month > 9 ? month + 1 : `0${month + 1}`}</h2>
          </div>
        </div>
      </div>
    </div>
    // <div className="box">
    //   <input type="date" name="dob" />

    //   <div className="err-reg">Invalid date</div>
    // </div>
  );
}

export default Calendar;
