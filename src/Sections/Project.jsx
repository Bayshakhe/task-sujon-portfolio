import React from "react";
import projectImg from '../../src/images/projects/project1.jpg'

const Project = () => {
  const projects = [
    {
      cardTitle: "Ecommarce Application",
      cardText: "Node Js, Express Js, MongoDB, React Js",
    },
    {
      cardTitle: "Ecommarce Application",
      cardText: "Node Js, Express Js, MongoDB, React Js",
    },
    {
      cardTitle: "Ecommarce Application",
      cardText: "Node Js, Express Js, MongoDB, React Js",
    },
    {
      cardTitle: "Ecommarce Application",
      cardText: "Node Js, Express Js, MongoDB, React Js",
    },
  ];
  return (
    <section className="project" id="project">
      <div className="container">
        <h1 className="heading">Project</h1>
        <div className="row">
          {projects.map((p, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="project__card">
                <div className="project__card__images">
                  <img
                    src={projectImg}
                    alt="project1"
                  />
                </div>
                <div className="project__card__layer">
                  <div className="project__card__layer__contents">
                    <h3 className="project__card__layer__contents__title">
                      {p.cardTitle}
                    </h3>
                    <span className="project__card__layer__contents__tools">
                      {p.cardText}
                    </span>
                  </div>
                  <div className="project__card__layer__link">
                    <a href="">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
