import React from "react"
import { Link } from "gatsby"
import "./products.scss"

import Img from "../../Image/image"

interface PropsType {}

export default (props: PropsType) => (
  <section className="small-container">
    <h2 className="title">Featured Products</h2>
    <div className="row">
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product1" />
        </Link>
        <a href="product-details.html">
          <h4>Red Printed T-Shirt</h4>
        </a>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product2" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product3" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product4" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
        <p>$50.00</p>
      </div>
    </div>

    <h2 className="title">Latest Products</h2>
    <div className="row">
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product5" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product6" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product7" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product8" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
        <p>$50.00</p>
      </div>
    </div>
    <div className="row">
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product9" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product10" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product11" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
        <p>$50.00</p>
      </div>
      <div className="col-4">
        <Link to="/product-details">
          <Img name="product12" />
        </Link>
        <h4>Red Printed T-Shirt</h4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
        </div>
        <p>$50.00</p>
      </div>
    </div>
  </section>
)