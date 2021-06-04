import React, { useState, useEffect } from "react";
import "../../cssfiles/Answer.css";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import axios from "axios";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover(hell_nah) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id_value, setid_value] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setid_value(hell_nah.value);
  });
  const delOperation = () => {
    // const id = id_value;
    //     axios
    //       .delete(`http://localhost:1234/removePost/`, { params: { id } })
    //       .then((res) => {
    //         console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <MoreHorizIcon onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="content-popover">
          <h5 onClick={delOperation}>Remove Content</h5>
        </div>
      </Popover>
    </div>
  );
}
