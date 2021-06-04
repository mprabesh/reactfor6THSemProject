import React, { useState } from "react";
import "../header.css";
import Logo1 from "../images/icon.JPG";
import HeaderRight1 from "../Prabesh/headerRIght";
import HeaderRight2 from "../Prabesh/headerRight1";
import { useAuthStatus, useChangeStatus } from "../Component/authContext";

function Header() {
  const val1 = useAuthStatus();
  console.log(val1);

  const val = val1 ? "true" : "false";
  return (
    <div className="header">
      <div classname="header_left">
        {" "}
        <img className="header_logo" src={Logo1} />
      </div>
      <div className="header_right">
        {val1 ? <HeaderRight1 /> : <HeaderRight2 />}
      </div>
    </div>
  );
}

export default Header;
