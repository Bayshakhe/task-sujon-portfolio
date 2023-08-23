import React from "react";
import user1 from '../../src/images/testimonials/user1.jpg'
import user2 from '../../src/images/testimonials/user2.jpg'
import user3 from '../../src/images/testimonials/user3.jpg'
import user4 from '../../src/images/testimonials/user4.jpg'
import user5 from '../../src/images/testimonials/user5.jpg'
import user6 from '../../src/images/testimonials/user6.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      image: `${user1}`,
      userName: "saddiq hussain",
      country: "united kingdom",
      cardText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
    {
      image: `${user2}`,
      userName: "json roy",
      country: "ireland",
      cardText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
    {
      image: `${user3}`,
      userName: "mustafa kamal",
      country: "turkey",
      cardText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
    {
      image: `${user4}`,
      userName: "muhammad ali",
      country: "pakistan",
      cardText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam deleniti quas corrupti quibusdam unde provident illum, repellendus enim facere.",
    },
  ];
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h1 className="heading">what customers are saying?</h1>
        <div className="row">
          <div className="col-xlg-8 col-md-12  col-sm-12 py-0">
            <div className="row">
              {testimonials.map((t, i) => (
                <div key={i} className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="testimonials__card">
                    <div className="testimonials__card__icon">
                      <i className="bi bi-chat-dots"></i>
                    </div>
                    <div className="testimonials__card__user">
                      <div className="testimonials__card__user__image">
                        <img src={t.image} alt="user image" />
                      </div>
                      <div className="testimonials__card__user__details">
                        <span className="testimonials__card__user__details__name">
                          {t.userName}
                        </span>
                        <span className="testimonials__card__user__details__country">
                          {t.country}
                        </span>
                        <span className="testimonials__card__user__details__rating">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </span>
                      </div>
                    </div>
                    <p className="testimonials__card__message">{t.cardText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xlg-4 col-md-12 col-sm-12 order-1">
            <div className="testimonials__right">
              <h1 className="testimonials__right__heading">
                That&apos;s the thing i&apos;m motivited
              </h1>
              <div className="testimonials__right__images">
                <div className="testimonials__right__images__block">
                  <img
                    src={`${user1}`}
                    alt="user image"
                  />
                </div>

                <div className="testimonials__right__images__block">
                  <img
                    src={`${user2}`}
                    alt="user image"
                  />
                </div>

                <div className="testimonials__right__images__block">
                  <img
                    src={`${user3}`}
                    alt="user image"
                  />
                </div>

                <div className="testimonials__right__images__block">
                  <img
                    src={`${user4}`}
                    alt="user image"
                  />
                </div>

                <div className="testimonials__right__images__block">
                  <img
                    src={`${user5}`}
                    alt="user image"
                  />
                </div>

                <div className="testimonials__right__images__block">
                  <img
                    src={`${user6}`}
                    alt="user image"
                  />
                </div>

                <span className="testimonials__right__images__clients">
                  250,00+
                </span>
              </div>
              <div className="testimonials__right__rating">
                <span className="testimonials__right__rating__avg">4.9</span>
                <span className="testimonials__right__rating__stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </span>
                <span className="testimonials__right__rating__total">
                  (4,582)
                </span>
              </div>
              <h3 className="testimonials__right__link">
                <a href="#">Let&apos;s talk about your next project?</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
