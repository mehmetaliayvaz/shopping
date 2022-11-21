import React from "react";

function StarIcon(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_18_399)">
        <path
          d="M10.0238 5.62195L10.1402 5.85767L10.4003 5.89547L14.9255 6.55303L11.651 9.7449L11.4627 9.92838L11.5072 10.1875L12.2802 14.6944L8.23267 12.5665L8 12.4442L7.76733 12.5665L3.71981 14.6944L4.4928 10.1875L4.53724 9.92838L4.34901 9.7449L1.07448 6.55303L5.59977 5.89547L5.85991 5.85767L5.97624 5.62195L8.00001 1.52134L10.0238 5.62195Z"
          fill={props.fillColor}
          stroke={props.strokeColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_18_399">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default StarIcon;
