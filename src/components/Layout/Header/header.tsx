import React, { Component } from "react"
import { Link } from "gatsby"

import Img from "../../Image/image"
import Nav from "../Nav/nav"

import "./header.scss"

class Header extends Component {
  constructor(props) {
    super(props)

    this.menuToggle = this.menuToggle.bind(this);
  }

  state = { 
    toggle: true 
  }
  
  menuToggle() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const { toggle } = this.state

    return (
      <header>
        <div className="backgroundBar">
          <div className="container">
            <div className="navbar">
              <div className="logo">
                <Link to="/">
                  <Img name="logo" />
                </Link>
              </div>
              <Nav toggle={toggle} />
              <Link to="/">
                <Img name="cart" />
              </Link>
              <div onClick={this.menuToggle}>
                <Img name="menu" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h1>Give Your Workout<br /> A new Style!</h1>
              <p>Success isnt always about greatness. Its about consistency. Consistent <br /> hard work gains success. Greatness will come.</p>
              <Link to="/" className="btn">Explore Now &#8594;</Link>
            </div>

            <div className="col-2">
              <Img name="image1" />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header