import React from "react";
import "../../../../cssfiles/adminDash.css";

function Usertable({ data }) {
  const handleClick = (a) => {
    console.log(a);
  };
  const column = data[0] && Object.keys(data[0]);
  return (
    <div className="outerTable">
      {column == null ? (
        <div className="SearchNull">
          <h1>Didn't find any.....</h1>
        </div>
      ) : (
        <table className="AdminTable">
          <thead>
            <tr>
              {data[0] && column.map((h) => <th>{h}</th>)}
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, d) => (
              <tr>
                {column.map((c) => (
                  <td>{row[c]}</td>
                ))}
                <td>
                  <a
                    onClick={() => {
                      handleClick(data[d]);
                    }}
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Usertable;
