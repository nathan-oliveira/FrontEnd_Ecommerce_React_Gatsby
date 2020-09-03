import React from "react"
import "./testimonial.scss"

import Img from "../../Image/image"

interface PropsType {}

export default (props: PropsType) => (
  <section>
    <article className="testimonial">
      <div className="small-container">
        <div className="row">
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo quas. Magni architecto aperiam autem eos voluptatem dolorum molestias, dolores provident rerum neque pariatur nobis asperiores facilis porro dolorem? Voluptas.</p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <Img name="user1" />
            <h3>Sean Parker</h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo quas. Magni architecto aperiam autem eos voluptatem dolorum molestias, dolores provident rerum neque pariatur nobis asperiores facilis porro dolorem? Voluptas.</p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <Img name="user2" />
            <h3>Mike Smith</h3>
          </div>
          <div className="col-3">
            <i className="fa fa-quote-left"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, illo quas. Magni architecto aperiam autem eos voluptatem dolorum molestias, dolores provident rerum neque pariatur nobis asperiores facilis porro dolorem? Voluptas.</p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <Img name="user3" />
            <h3>Mabel Joe</h3>
          </div>
        </div>
      </div>
    </article>
  </section>
)