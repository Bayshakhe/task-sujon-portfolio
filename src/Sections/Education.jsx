import React from "react";

const Education = () => {
  const education = [
    {
      cardTitle: "Diploma Softwer Engineering",
      instituteName: "Meherpur College of Engineering and Technology",
      duration: "2020-2024",
    },
    {
      cardTitle: "Diploma Softwer Engineering",
      instituteName: "Meherpur College of Engineering and Technology",
      duration: "2020-2024",
    },
    {
      cardTitle: "Diploma Softwer Engineering",
      instituteName: "Meherpur College of Engineering and Technology",
      duration: "2020-2024",
    },
    {
      cardTitle: "Diploma Softwer Engineering",
      instituteName: "Meherpur College of Engineering and Technology",
      duration: "2020-2024",
    },
  ];
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="row">
          {/* education section */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h1 className="heading">Education</h1>
            <div className="row --row1">
              {education.map((e, i) => (
                <div key={i} className="col-md-6 col-sm-12 col-xs-12">
                  <div className="education__card">
                    <h3 className="education__card__titile">{e.cardTitle}</h3>
                    <div className="education__card__block">
                      <span className="education__card__block__left education__card__block__left__house">
                        <i className="bi bi-house-fill"></i>
                      </span>
                      <span className="education__card__block__right">
                        {e.instituteName}
                      </span>
                    </div>
                    <div className="education__card__block">
                      <span className="education__card__block__left education__card__block__left__calendar">
                        <i className="bi bi-calendar-fill"></i>
                      </span>
                      <span className="education__card__block__right">
                        {e.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience section */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h1 className="heading">Experiance</h1>
            <div className="row --row2">
            {education.map((e, i) => (
                <div key={i} className="col-md-6 col-sm-12 col-xs-12">
                  <div className="education__card">
                    <h3 className="education__card__titile">{e.cardTitle}</h3>
                    <div className="education__card__block">
                      <span className="education__card__block__left education__card__block__left__house">
                        <i className="bi bi-house-fill"></i>
                      </span>
                      <span className="education__card__block__right">
                        {e.instituteName}
                      </span>
                    </div>
                    <div className="education__card__block">
                      <span className="education__card__block__left education__card__block__left__calendar">
                        <i className="bi bi-calendar-fill"></i>
                      </span>
                      <span className="education__card__block__right">
                        {e.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
