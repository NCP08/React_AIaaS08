import Sub3 from "./Sub3";
import { useContext } from "react";
import { themeContext1 } from "./themeContext";

const Sub2 = () => {
  const theme1 = useContext(themeContext1);

  return (
    <div style={theme1}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
};

export default Sub2;
