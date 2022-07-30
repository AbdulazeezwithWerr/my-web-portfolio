import React from "react";
import './ReactPr.css';
import ReactProject from '../Data/ReactPr.json';
import githubImg from "../assets/img/github.png";
import codepenomg from '../assets/img/codepen.webp';



const ReactPr = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>React Projects</h2>
            <br />
            <div className="row">
              {ReactProject.map((reac, i) => (
                <div className="col-sm-6" key={i}>
                  <p className="project-name">{reac.name}</p>
                  <img className="image-for" src={reac.image} alt={i}/>
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
                    href={reac.codelink}
                    className="btn btn-default d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt={i} />
                  </a>
                  <a
                    href={reac.demo}
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

export default ReactPr;
