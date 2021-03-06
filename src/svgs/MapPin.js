import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function MapPin(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f74440"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-map-pin"
      {...props}
    >
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <Circle cx={12} cy={10} r={3} />
    </Svg>
  );
}

export { MapPin };
