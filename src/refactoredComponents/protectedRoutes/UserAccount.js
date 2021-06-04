import { Button } from "@material-ui/core";
import React from "react";
import "../../cssfiles/Useraccount.css";

function UserAccount() {
  return (
    <div className="UserAccount_component">
      <div className="UserAccount_component_inner">
        <div className="Password_section">
          <h4>Change Password</h4>
          <div className="top_section1">
            <label>Current Password</label>
            <input type="text" />
          </div>
          <div className="top_section2">
            <label> New Password</label>
            <input type="text" />
          </div>
          <div className="bottom_section">
            <button>Ok</button>
          </div>
        </div>
      </div>
      <div className="About_section">
        <div className="About_section_inner">
          <h4>Write About Yourself</h4>
          <div className="About_section_input">
            {" "}
            <input type="text" />
          </div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
