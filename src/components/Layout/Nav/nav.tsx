import React from "react"
import MenuItem from '../MenuItem/menuItem'

interface PropsType {
  toggle: boolean;
}

export default (props: PropsType) => (
  <nav>
    <ul className={props.toggle ? "toggleOn": "toggleOff"} id="MenuItems">
      <MenuItem path='/' label='Home' />
      <MenuItem path='/' label='Products' />
      <MenuItem path='/' label='About' />
      <MenuItem path='/' label='Contact' />
      <MenuItem path='/' label='Account' />
    </ul>
  </nav>
)