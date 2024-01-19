import React from "react";
import cuteimg1 from "../assets/images/CuteAvatar.png";
import cuteimg2 from "../assets/images/CuteAvatar2.png";
import cuteimg3 from "../assets/images/CuteAvatar3.png";
export const Home = () => {
  return (
    <div>
      <div className="bg-secondary vh-100 scrolldown">
        <div className="d-flex justify-content-center align-items-center h-100">
          <p className="strike display-2 fw-bold text-primary">todo</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 scrollup">
        <div className="">
          <span className="fw-bold display-2">
            <letter className="purple">t</letter>
            <letter className="red">o</letter>
            <letter className="green">d</letter>
            <letter className="blue">o</letter>
          </span>
        </div>
        <div className="hero-text-container">
          <p className="fs-5 text-center pt-5 hero-text">
            Get stuff done with our minimal pastel aesthetic todo app. <br />
            Simplify your day, one task at a time!
          </p>
        </div>
        <div className="pt-5">
          <button className="btn btn-primary px-5 fw-bold">Get Started</button>
        </div>
        <div className="img-container mt-5">
          <img src={cuteimg1} alt="" className="avatar" />
          <img src={cuteimg2} alt="" className="avatar" />
          <img src={cuteimg3} alt="" className="avatar" />
        </div>
      </div>
    </div>
  );
};
