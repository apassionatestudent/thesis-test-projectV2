import React from "react";

function Years({ today, year, setYear }) {
  return (
    <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
      {Array.from(
        { length: today.getFullYear() - 1900 + 1 },
        (_, i) => 1900 + i
      ).map((k) => {
        <option value={k} key={k}>
          dojdijd
        </option>;
      })}
    </select>
  );
}

export default Years;
