import React from "react";

const StartBootstrap = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="container">
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="container">
        <label htmlFor="customRange1" className="form-label">
          Example range
        </label>
        <input type="range" className="form-range" id="customRange1" />
      </div>
      <div className="container">
        <i class="fas fa-user-graduate"></i>
      </div>
    </div>
  );
};

export default StartBootstrap;
