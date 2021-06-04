import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./Usertable.js";
import ModifyData from "./ModifyData";
import RandomData from "../randomData";

function Usertable() {
  const [value, setvalue] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:1234/search`)
      .then((res) => {
        const a = res.data;
        console.log("resolved successfully");
        const pop = ModifyData(res.data);
        setvalue(pop);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function search(rows) {
    return rows.filter(
      (row) =>
        row.FirstName.toLowerCase().indexOf(searchText) > -1 ||
        row.LastName.toLowerCase().indexOf(searchText) > -1 ||
        row.Email.toLowerCase().indexOf(searchText) > -1
    );
  }
  return (
    <div>
      <div className="inputBox">
        <input
          placeholder="Search....."
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <DataTable data={search(value)} />
    </div>
  );
}

export default Usertable;
