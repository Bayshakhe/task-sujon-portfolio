import React from "react";

const Blogs = () => {
  const blogs = [
    {
      image: "./src/images/posts/tailwindcss.png",
      cardTitle: "Frontend",
      authorImg: './src/images/bg/user.jpg',
      authorName: 'muhammad asif',
      time: '15 jan 2022',
      bookName: 'Tailwindcss the complete guide for beginners'
    },
    {
      image: "./src/images/posts/tailwindcss.png",
      cardTitle: "Frontend",
      authorImg: './src/images/bg/user.jpg',
      authorName: 'muhammad asif',
      time: '15 jan 2022',
      bookName: 'Tailwindcss the complete guide for beginners'
    },
    {
      image: "./src/images/posts/tailwindcss.png",
      cardTitle: "Frontend",
      authorImg: './src/images/bg/user.jpg',
      authorName: 'muhammad asif',
      time: '15 jan 2022',
      bookName: 'Tailwindcss the complete guide for beginners'
    },
    {
      image: "./src/images/posts/tailwindcss.png",
      cardTitle: "Frontend",
      authorImg: './src/images/bg/user.jpg',
      authorName: 'muhammad asif',
      time: '15 jan 2022',
      bookName: 'Tailwindcss the complete guide for beginners'
    },
  ];
  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <h1 className="heading">my blogs</h1>
        <div className="row">
          {
            blogs.map((b,i)=><div key={i} className="col-lg-3  col-sm-6 col-sm-6 col-xs-12">
            <div className="blogs__card">
              <div className="blogs__card__image">
                <img
                  src={b.image}
                  alt="post image"
                />
                <div className="blogs__card__image__layer">
                  <span className="blogs__card__image__layer__category">
                  {b.cardTitle}
                  </span>
                </div>
              </div>
              <div className="blogs__card__author">
                <div className="blogs__card__author__image">
                  <img src={b.authorImg} alt="author image" />
                </div>
                <div className="blogs__card__author__details">
                  <span className="blogs__card__author__details__name">
                  {b.authorName}
                  </span>
                  <span className="blogs__card__author__details__date">
                    <i className="bi bi-clock"></i>
                    <span className="blogs__card__author__details__date__time">
                    {b.time}
                    </span>
                  </span>
                </div>
              </div>
              <div className="blogs__card__body">
                <h3 className="blogs__card__body__title">
                  <a href="#">{b.bookName}</a>
                </h3>
                <a href="#" className="blogs__card__body__link">
                  read more →
                </a>
              </div>
            </div>
          </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default Blogs;
