import React, { useState } from "react";
import "../../cssfiles/searchbox.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import LogOut from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import InputBox from "../searchBox/autoSearch";

const logOut = () => {
  localStorage.clear();
};

function HeaderRight() {
  const [notifyNo, setnotifyNo] = useState(3);

  return (
    <div>
      {" "}
      <div className="header_right">
        <div className="header_input">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <div className="SearchInput">
            <InputBox />
            {/* <input
              type="text"
              placeholder="Search Name..."
              size="100"
              maxlength="17"
            /> */}
          </div>
        </div>{" "}
        <div className="header_right_inner">
          {" "}
          <div className="IconComponents2">
            <Badge badgeContent={notifyNo} color="error">
              <NotificationsIcon />
            </Badge>
          </div>
          <div className="IconComponents3">
            {" "}
            <PersonIcon />
          </div>
          <div className="IconComponents3" onClick={logOut}>
            {" "}
            <a href="/login">
              {" "}
              <LogOut />
            </a>
          </div>
        </div>
        {/* <Route exact path="/">
              {" "}
              <a href="/login">
                {" "}
                <div className="LogIn Button">
                  <label className="Log_In_label">Log In</label>
                  <img className="LogIn_logo" src={LogIn} />
                </div>
              </a>
            </Route> */}
      </div>
    </div>
  );
}

export default HeaderRight;
