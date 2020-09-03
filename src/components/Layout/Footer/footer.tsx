import React from "react"
import "./footer.scss"

import Img from "../../Image/image"

interface PropsType {}

export default (props: PropsType) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="footer-col-1">
          <h3>Download Our App</h3>
          <p>Download App for Android and ios mobile phone.</p>
          <div className="app-logo row2">
            <Img name="playstore" />
            <Img name="appstore" />
            {/* <img src="./images/play-store.png" /> */}
            {/* <img src="./images/app-store.png" /> */}
          </div>
        </div>
        <div className="footer-col-2">
          <Img name="logowhite" />
          {/* <img src="./images/logo-white.png" /> */}
          <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
        </div>
        <div className="footer-col-3">
          <h3>Useful Links</h3>
          <ul>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
          </ul>
        </div>
        <div className="footer-col-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2020 - Nathan Oliveira</p>
    </div>
  </footer>
)