import React from "react";
import developer from '../../src/images/bg/user.jpg'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-xs-12">
            <div className="footer__image">
              <img src={`${developer}`} alt="developer image" />
              <span className="footer__image__label">Freelance Available</span>
            </div>
            <p className="footer__copyright">
              Copyright © <span className="year">2022</span> by{" "}
              <span className="footer__copyright--name">Muhammad Sujon</span>,
              All rights reserved
            </p>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12">
            <form action="" className="form">
              <h1 className="heading">contact me</h1>
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12">
                  <input
                    type="text"
                    className="form__control"
                    placeholder="Name..."
                  />
                </div>
                <div className="col-md-5 col-sm-12 col-xs-12">
                  <input
                    type="email"
                    className="form__control"
                    placeholder="Email..."
                  />
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <input
                    type="text"
                    className="form__control"
                    placeholder="Subject..."
                  />
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <textarea
                    name=""
                    className="form__control"
                    cols="30"
                    rows="10"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <input
                    type="submit"
                    value="send email"
                    className="btn btn-dark"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
