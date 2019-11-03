import React from "react";

export default function Skills() {
  return (
    <div className="container-fluid">
      <section>
        <main className="offset-md-2 my-3 px-3 pt-3" id="skills">
          <h1 className="title">
            Skills
          </h1>
          <div className="container py-4">
            <h4 className="description">Programming languages & tools</h4>
            <div className="container programming-icons">
              <img
                src="https://img.icons8.com/color/96/000000/html-5.png"
                alt="HTML5"
                className="img-fluid"
              ></img>

              <img
                src="https://img.icons8.com/color/96/000000/css3.png"
                alt="CSS"
                className="img-fluid"
              ></img>
              <img
                src="https://img.icons8.com/color/96/000000/javascript.png"
                alt="JavaScript"
              ></img>
              <img
                src="https://img.icons8.com/color/96/000000/bootstrap.png"
                alt="BootstrapBootstrap"
                className="img-fluid"
              ></img>
              <img
                src="https://img.icons8.com/plasticine/96/000000/react.png"
                alt="Reactjs"
                className="img-fluid"
              ></img>
              <img
                src="https://img.icons8.com/color/96/000000/nodejs.png"
                alt="Nodejs"
                className="img-fluid"
              ></img>
              <img
                src="https://img.icons8.com/color/96/000000/mongodb.png"
                alt="MongoDB"
                className="img-fluid"
              ></img>
              <img
                src="https://img.icons8.com/color/96/000000/npm.png"
                alt="NPM"
                className="img-fluid"
              >
              </img>
            </div>
          </div>
          <div className="container pt-4 pb-1">
            <h4 className="description">Communication Languages</h4>
            <div className="col d-flex justify-content-around container pt-1 languages">
              <h5 className="my-0">
                <img
                  src="https://img.icons8.com/officexs/16/000000/vietnam.png"
                  alt="Vietnamese"
                  className="mb-1"
                ></img>{" "}
                Vietnamese
              </h5>
              <p className="proficiency mx-1">Native Proficiency</p>
              <h5 className="my-0">
                <img
                  src="https://img.icons8.com/officexs/16/000000/usa.png"
                  alt="American English"
                  className="mb-1"
                ></img>{" "}
                English
              </h5>
              <p className="proficiency mx-1">Bilingual Proficiency</p>
              <h5 className="my-0">
                <img
                  src="https://img.icons8.com/officexs/16/000000/france.png"
                  alt="French"
                  className="mb-1"
                ></img>{" "}
                French
              </h5>
              <p className="proficiency mx-1">Limited Working Proficiency</p>
            </div>
          </div>
        </main>
      </section>
      <hr></hr>
    </div>
  );
}
