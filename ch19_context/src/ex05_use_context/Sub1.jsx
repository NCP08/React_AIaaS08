import Sub2 from "./Sub2";
import { themeContext1 } from "./themeContext";
import { useContext } from "react";

const Sub1 = () => {
  const theme1 = useContext(themeContext1);

  return (
    <div style={theme1}>
      <h1>Sub1</h1>
      <Sub2 />
    </div>
  );
};

export default Sub1;
