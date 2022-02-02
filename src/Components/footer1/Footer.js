import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <div className="anc">about us</div>
                </li>
                <li>
                  <div className="anc">our services</div>
                </li>
                <li>
                  <div className="anc">privacy policy</div>
                </li>
                <li>
                  <div className="anc">affiliate program</div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <div className="anc">FAQ</div>
                </li>
                <li>
                  <div className="anc">shipping</div>
                </li>
                <li>
                  <div className="anc">returns</div>
                </li>
                <li>
                  <div className="anc">order status</div>
                </li>
                <li>
                  <div className="anc">payment options</div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <div className="anc">watch</div>
                </li>
                <li>
                  <div className="anc">bag</div>
                </li>
                <li>
                  <div className="anc">shoes</div>
                </li>
                <li>
                  <div className="anc">dress</div>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <div className="anc1">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="anc1">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="anc1">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="anc1">
                  <i className="fab fa-linkedin-in"></i>
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
