import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 151c22.4-43.2 25-85 0-129-40-54 150 12 133 69 0 26-161 114-133 60Z"
      stroke="#000"
      strokeWidth={3}
    />
  </svg>
)

export default SvgComponent