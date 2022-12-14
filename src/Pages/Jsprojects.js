import React from "react";
import "./Jsprojects.css";
import ProjectData from "../Data/Jsprojects.json";
import githubImg from "../assets/img/github.png";
import codepenomg from '../assets/img/codepen.webp';



const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Js Projects</h2>
            <br />
            <div className="row">
              {ProjectData.map((project, i) => (
                <div className="col-sm-6" key={i}>
                  <p className="project-name">{project.name}</p>
                  <img className="image-for" src={project.image} alt={i}/>
                  {/* <iframe
                    width="100%"
                    height="300"
                    src={project.projectlink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe> */}
                  <br />
                <div className="div-for-btn">
                <a
                    href={project.codelink}
                    className="btn btn-default d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt={i} />
                  </a>
                  <a
                    href={project.demo}
                    className="btn btn-default d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo Version <img src={codepenomg} alt={i} />
                  </a>
                </div>
                </div>

                


              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
