import React from "react"
import { Link } from "gatsby"

export default props => (
  <li>
    <Link to={props.path}>
      {props.label}
    </Link>
  </li>
)