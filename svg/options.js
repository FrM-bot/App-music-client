import * as React from "react"

const SvgOptios = (props) => (
  <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <circle cx={10.5} cy={10.5} r={1} />
      <circle cx={10.5} cy={5.5} r={1} />
      <circle cx={10.5} cy={15.5} r={1} />
    </g>
  </svg>
)

export default SvgOptios