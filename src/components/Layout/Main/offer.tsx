import React from "react"
import { Link } from "gatsby"
import "./offer.scss"

import Img from "../../Image/image"

interface PropsType {}

export default (props: PropsType) => (
  <section className="offer">
    <div className="small-container">
      <div className="row">
        <div className="col-2 offerImg">
          <Img name="exclusive" />
        </div>
        <div className="col-2">
          <p>Exclusively Available on RedStore</p>
          <h1>Smart Band 4</h1>
          <small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as canbe.</small><br/>
          <Link to="/" className="btn">Buy Now &#8594;</Link>
        </div>
      </div>
    </div>
  </section>
)