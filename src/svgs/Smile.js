import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Smile(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#494949"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-smile"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <Path d="M9 9L9.01 9" />
      <Path d="M15 9L15.01 9" />
    </Svg>
  );
}

export { Smile };
