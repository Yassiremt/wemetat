import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Checked(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check"
      {...props}
    >
      <Path d="M20 6L9 17 4 12" />
    </Svg>
  );
}

export { Checked };
