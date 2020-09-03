import React from "react"

import Img from "../../Image/image"

import "./categories.scss"

interface PropsType {}

export default (props: PropsType) => (
  <section className="categories">
    <div className="small-container">
      <div className="row">
        <div className="col-3">
          <Img name="category1" />
        </div>
        <div className="col-3">
          <Img name="category2" />
        </div>
        <div className="col-3">
          <Img name="category3" />
        </div>
      </div>
    </div>
  </section>
)