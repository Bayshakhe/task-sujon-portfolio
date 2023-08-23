import React from 'react';

const Skills = () => {
    const skills = [
        {duration: '6 years', lists: 'html, css & javascript'},
        {duration: '6 years', lists: 'html, css & javascript'},
        {duration: '6 years', lists: 'html, css & javascript'},
        {duration: '6 years', lists: 'html, css & javascript'},
    ]
    return (
        <section className="skills" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="skills__contents">
                        <h1 className="skills__contents__heading">
                            I have high skills in developing and programming
                        </h1>
                        <p className="skills__contents__message">
                            I am working on a professional, visually sophisticated and technologically proficient,
                            responsive and multi-functional personal portfolio template Shane.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h1 className="heading">my skills</h1>
                    {
                        skills.map((s,i)=><div key={i} className="skills__block">
                        <span className="skills__block__exp">{s.duration}</span>
                        <span className="skills__block__list">{s.lists}</span>
                    </div>)
                    }
                </div>
            </div>
        </div>
    </section>
    );
};

export default Skills;