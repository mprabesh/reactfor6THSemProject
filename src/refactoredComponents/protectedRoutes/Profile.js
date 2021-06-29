import React, { useEffect, useState } from "react";
import "../../cssfiles/Profile.css";
import Handmade from "./postContainer";
import axios from "axios";

function Profile() {
  const d = localStorage.getItem("Name");
  const [objectValue, setobjectValue] = useState([]);
  useEffect(() => {
    axios.get(`/specific/${d}`).then((res) => {
      setobjectValue(res.data);
    });
  });
  return (
    <>
      <div className="Profile_component">
        <div className="Profile_inner">
          <h4>{localStorage.getItem("Name")}</h4>
          <h5>
            Student at United Technical College
            <br />
            (-_-)Eager to Answer the queries(-_-)
          </h5>
          <div className="work">
            <h6>7 Questions</h6>
            <h6>34 Answers</h6>
          </div>
        </div>
      </div>
      <div classname="Profile_component">
        {/* <Handmade value={index} /> */}

        {objectValue.map((index) => {
          return (
            <li className="list-ko">
              <Handmade value={index} />
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
