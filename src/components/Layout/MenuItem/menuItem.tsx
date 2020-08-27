import React from "react"
import { Link } from "gatsby"

interface PropsType {
  path: string;
  label: string;
}

export default (props: PropsType) => (
  <li>
    <Link to={props.path}>
      {props.label}
    </Link>
  </li>
)
