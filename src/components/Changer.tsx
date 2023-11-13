import { useSelector } from "react-redux";

import selectIndex from "./changeSlice";

const Changer = () => {
  let x = useSelector(selectIndex);
  if (x == 1) {
    const q = "1";
  } else if (x == 2) {
    let q = "2";
  } else {
    let q = "3";
  }

  return <>console.log(q);</>;
};

export default Changer;
