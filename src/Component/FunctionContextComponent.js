import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionContextComponent() {
  const darkTheme = useTheme();
  console.log(darkTheme);
  const changeTheme = useThemeUpdate();
  const themeStyles = {
    value: darkTheme ? "Logged IN" : "Logged Out",
  };
  return (
    <>
      <button onClick={changeTheme}>Click Here1</button>
      <div>{themeStyles.value}</div>
    </>
  );
}

export default FunctionContextComponent;
