import React from "react";
import "./Home.css";
// import profileimg from "../assets/img/IMAGE 2022-07-19 13:29:26.jpg";
import profileimg from "../assets/img/myimage.webp";
import Pdf from "../assets/pdf/myresume.pdf";
import { Link } from "react-router-dom";
import Telegram from "../assets/img/telegram.webp";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                alt="Abdulaziz Mamadaliyev"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
                  href="https://t.me/polatovc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Telegram}
                    alt="telegram"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://github.com/Abdulaziz-Werr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://instagram.com/callmeabdulazeez?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagramicon}
                    alt="instagram"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="mailto:abdulazizmamadaliyev16@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Abdulaziz Mamadaliyev</h1>
              <h2>Front End Developer</h2>
              <br />
              <div className="row">
                <div className="col-sm-4">
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Резюме
                    </button>
                  </a>
                </div>
                <div className="col-sm-5">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Связитесь
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
