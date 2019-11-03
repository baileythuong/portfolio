import React from "react";

export default function AboutMe() {
  return (
    <>
    <div className="container-fluid">
      <section id="about">
        <main className="offset-md-2 my-3 px-3 pt-3">
          <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container">
              <h1 className="header">
                BAILEY <span style={{ color: "#bd5d38" }}>NGUYEN</span>
              </h1>
              <h3 className="pb-3">
                <span style={{ color: "#a9a9a9" }}>
                  440/26/9 Nguyen Kiem, Phu Nhuan, HCMC, Vietnam · +84933265658 ·{" "}
                </span>
                <a href="mailto:baileythuong@gmail.com" style={{ color: "#bd5d38" }}>baileythuong@gmail.com</a>
              </h3>
              <p className="lead pt-2">
                I'm a former Communication Excecutive making my way to become a
                Web Developer. I'm responsible for designing, coding and
                modifying websites with the primary responsibility of coding for
                mobile platforms, from layout to function and according to
                specifications.
              </p>
              <div className="social-icons pt-5">
                <a href="https://www.linkedin.com/in/thuongpham/">
                  <i className="fab fa-linkedin fa-3x mr-2"></i>
                </a>
                <a href="https://github.com/llamadelrey/">
                  <i className="fab fa-github fa-3x mx-2"></i>
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
      <hr></hr>
    </div>
    </>
  );
}