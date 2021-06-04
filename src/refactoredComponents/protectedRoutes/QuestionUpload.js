import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../../App.css";
import AnswerPosted from "./POstedAnswer";
import axios from "axios";

function POstCard() {
  const d = localStorage.getItem("Name");
  const [values, setValues] = useState({ name: d, Question: "" });
  const handleChange = (e) => {
    const value = e.target.value;
    setValues({ ...values, [e.target.name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:1234/beep`, { values })
      .then((res) => {
        console.log(res);
        values.Question = "";
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };
  return (
    <div className="Prabesh">
      <div className="Postcard_top">
        {" "}
        <div className="PostQuestion_top">
          <AccountCircleIcon />
          <h5 className="card-title">{localStorage.getItem("Name")}</h5>
        </div>
      </div>
      <div className="Postcard_bottom">
        {" "}
        <div className="PostQuestion">
          <form>
            <input
              type="text"
              name="Question"
              value={values.Question}
              onChange={handleChange}
            />
            <button onClick={handleClick}>
              <h6>Post</h6>
            </button>
            <button disabled>
              <h6>Cancel</h6>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default POstCard;
