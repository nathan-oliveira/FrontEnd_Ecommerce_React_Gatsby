import React from "react"
import "./brands.scss"

import Img from "../../Image/image"

interface PropsType {}

export default (props: PropsType) => (
  <section>
    <aside className="brands">
      <div className="small-container">
        <div className="row">
          <div className="col-5">
            <Img name="logogodrej" />
          </div>
          <div className="col-5">
            <Img name="logooppo" />
          </div>
          <div className="col-5">
            <Img name="logococacola" />
          </div>
          <div className="col-5">
            <Img name="logopaypal" />
          </div>
          <div className="col-5">
            <Img name="logophilips" />
          </div>
        </div>
      </div>
    </aside>
  </section>
)