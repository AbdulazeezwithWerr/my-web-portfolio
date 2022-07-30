import React from "react";
import './About.css';

const About = () => {
  return (
    <div id="about"  data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>Об о мне</h2>
              <p>Я веб-разработчик и web - designer. 
                Мне нравится решать проблемы проектирования, 
                разрабатывать новые функции и создавать прототипы с использованием различных сред. 
                Моя работа в основном сосредоточена на frontend-разработке. 
                Что касается графического дизайна, моя работа в основном связана с обработкой фотографий. 
                Кроме того, мне также нравится заниматься фотографией и видеосъемкой, 
                где я могу выразить свой творческий мыслительный процесс.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
