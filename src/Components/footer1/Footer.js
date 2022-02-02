import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <div href="#">about us</div>
                </li>
                <li>
                  <div href="#">our services</div>
                </li>
                <li>
                  <div href="#">privacy policy</div>
                </li>
                <li>
                  <div href="#">affiliate program</div>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <div href="#">FAQ</div>
                </li>
                <li>
                  <div href="#">shipping</div>
                </li>
                <li>
                  <div href="#">returns</div>
                </li>
                <li>
                  <div href="#">order status</div>
                </li>
                <li>
                  <div href="#">payment options</div>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <div href="#">watch</div>
                </li>
                <li>
                  <div href="#">bag</div>
                </li>
                <li>
                  <div href="#">shoes</div>
                </li>
                <li>
                  <div href="#">dress</div>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <div href="#">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div href="#">
                  <i class="fab fa-twitter"></i>
                </div>
                <div href="#">
                  <i class="fab fa-instagram"></i>
                </div>
                <div href="#">
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
