import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <section className="header" id="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="header__data">
                <div className="header__data__contents">
                  <div className="header__data__contents__top">
                    Hi My Name Is
                  </div>
                  <div className="header__data__contents__heading">
                    <TypeAnimation
                      sequence={["Mohammd Sujon", 1000]}
                      wrapper="span"
                      speed={10}
                      style={{ display: "inline-block" }}
                      repeat={Infinity}
                    />
                  </div>
                  <div className="header__data__contents__bottom">
                    MERN Stack Developer
                  </div>
                  <div className="heaser__data__contents_link">
                    <a
                      href="./src/files/sujonCv.pdf"
                      className="btn btn-default"
                      target="_blank"
                    >
                      Download Cv
                    </a>{" "}
                    &nbsp;
                    <button
                      onClick={() => setOpenModal(true)}
                      className="btn btn-dark open__modal"
                    >
                      Hire Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal section */}
      {openModal && (
        <section style={{ display: "flex" }} className="modal" id="modal">
          <div className="modal__wrapper">
            <i
              onClick={() => setOpenModal(false)}
              className="bi bi-x modal__wrapper__close"
            ></i>
            <div className="modal__wrapper__images">
              <img
                src="./src/images/bg/user.jpg"
                alt="user"
                className="modal__wrapper__images__img"
              />
            </div>
            <div className="modal__wrapper__contents">
              <h1 className="heading">Why Hire Me?</h1>
              <p className="modal__wrapper__contents__text">
                Hard-working listing programmer with a flair for creating
                elegant solutions in the least amount of time. As a freelance
                programmer, I have created many professional websites for
                clients around the globe.ke love what we do and we do what our
                clients love & work with great clients all over the world to
                create thoughtful and purposeful websites.
              </p>
              <div className="modal__wrapper__contents__block">
                <span className="modal__wrapper__contents__block__left">
                  Emial
                </span>
                <span className="modal__wrapper__contents__block__right">
                  contact@sujon.com
                </span>
              </div>
              <div className="modal__wrapper__contents__block">
                <span className="modal__wrapper__contents__block__left">
                  Phone
                </span>
                <span className="modal__wrapper__contents__block__right">
                  +8801772-703036
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
