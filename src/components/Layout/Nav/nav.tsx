import React from "react"
import MenuItem from '../MenuItem/menuItem'

export default props => (
  <nav>
    <ul className={props.toggle ? "toggleOff": "toggleOn"} id="MenuItems">
      <MenuItem path='/' label='Home' />
      <MenuItem path='/' label='Products' />
      <MenuItem path='/' label='About' />
      <MenuItem path='/' label='Contact' />
      <MenuItem path='/' label='Account' />
    </ul>
  </nav>
)