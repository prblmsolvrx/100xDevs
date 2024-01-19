import React from "react";
export const AuthText = ({ text, img }) => {
  return (
    <div className="col-md-6 bg-secondary vh-100 d-none d-md-block">
      <div className="d-flex align-items-center justify-content-evenly h-100 flex-column pt-7">
        <h2 className="px-5 fs-1 fw-bold text-primary">{text}</h2>
        <div className="img-container">
          <img
            style={{ height: "15rem", width: "15rem" }}
            src={img}
            alt="Signup"
          />
        </div>
      </div>
    </div>
  );
};
