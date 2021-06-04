import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function Test() {
  const val = useTheme();
  const changeVal = useThemeUpdate();
  return (
    <div>
      {" "}
      <button onClick={changeVal}>Toggle Theme</button>
    </div>
  );
}

export default Test;
