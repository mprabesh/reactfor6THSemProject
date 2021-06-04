import React, { useState, useEffect } from "react";
import "../../cssfiles/handmade.css";
import AnswerPosted from "./POstedAnswer";
import Answer from "./PostAnswer";
import axios from "axios";
import PostCard from "./QuestionUpload";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import VisibilityIcon from "@material-ui/icons/Visibility";

import SimplePopover from "./Popover";

function Handmade(apple) {
  const [visible, setVisible] = useState(false);
  const [report, setReportstatus] = useState([]);
  const [answerData, setAnswerValues] = useState([]);

  const handleClick = (e) => {
    if (visible === true) setVisible(false);
    else setVisible(true);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:1234/getAnswers/${apple.value._id}`)
      .then((res) => {
        setAnswerValues(res.data);
      });
  });

  return (
    <div className="Post_section">
      <div className="Post_section_inner">
        <div className="Post_section_Top">
          <div className="Post_section_Top1">
            {" "}
            <AccountCircleIcon />
            <h6>{apple.value.name}</h6>
          </div>
          <div className="option">
            <SimplePopover value={apple.value._id} />
          </div>
        </div>
        <div className="Post_section_mid">
          <h5>{apple.value.Question}</h5>
        </div>
        <div className="Post_section_bottom">
          <div className="Post_section_option">
            <VisibilityIcon />
            <h6
              onClick={() => {
                console.log(answerData);
              }}
            >
              View
            </h6>
          </div>
          <div className="Post_section_option" onClick={handleClick}>
            <QuestionAnswerIcon />
            <h6>Answer</h6>
          </div>
        </div>
        <div className="Post_section_Answer">
          {visible ? <Answer value={apple.value._id} /> : null}
          {/* <AnswerPosted /> */}
          {answerData.map((index) => {
            return (
              <li key={index._id} className="list-ko">
                <AnswerPosted value={index} />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Handmade;
