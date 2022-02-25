import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackArrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={33}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f74440"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-left"
      {...props}
    >
      <Path d="M19 12L5 12" />
      <Path d="M12 19L5 12 12 5" />
    </Svg>
  );
}

export { BackArrow };
