import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Map(props) {
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
      className="feather feather-map"
      {...props}
    >
      <Path d="M1 6L1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6z" />
      <Path d="M8 2L8 18" />
      <Path d="M16 6L16 22" />
    </Svg>
  );
}

export { Map };
