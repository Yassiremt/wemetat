import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Share(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFF"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-share-2"
      {...props}
    >
      <Circle cx={18} cy={5} r={3} />
      <Circle cx={6} cy={12} r={3} />
      <Circle cx={18} cy={19} r={3} />
      <Path d="M8.59 13.51L15.42 17.49" />
      <Path d="M15.41 6.51L8.59 10.49" />
    </Svg>
  );
}

export { Share };
