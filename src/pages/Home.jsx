import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      {/* 1st section  */}
      <div className="text-center ">
        <div className="hero" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1 className="">Model 3</h1>
            <p>$7,500 Federal Tax Credit Available<sup>1</sup></p>
            <p style={{textDecoration:"underline"}}>From $29,990 After Est. Savings<sup>2</sup></p>

            <div className=" d-flex obtn gap-4 ">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 2nd section  */}
        <div className="hero2" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1>Model Y</h1>
            <p>From $31,490<sup>3</sup></p>
            <p style={{textDecoration:"underline"}}>After $13,500 Est. Savings</p>

            <div className=" d-flex obtn gap-4 ">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 3rd section  */}

        <div className="hero3" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1>Model X</h1>
            <p>From $63,990<sup>4</sup></p>
            <p>After Est. Savings</p>

            <div className=" d-flex obtn gap-4 ">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 4th section  */}

        <div className="hero4" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1>Model S</h1>
            <p>From $66,490<sup>5</sup></p>
            <p>After Est. Savings</p>

            <div className=" d-flex obtn gap-4 ">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 5th section  */}

        <div className="hero5" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1>Model Y</h1>
            

            <div className=" d-flex obtn gap-4 ">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 6th section  */}

        <div className="hero6" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1>Solar Panels</h1>
            <p style={{textDecoration:"underline"}}>Schedule a Virtual Consultation</p>
            
            <div className=" d-flex obtn gap-4">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 7th section  */}

        <div className="hero7" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1>Solar Roof</h1>
            <p>Produce Clean Energy From Your Roof</p>
            
            <div className=" d-flex obtn gap-4 ">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 8th section  */}

        <div className="hero8" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column">
            <h1>Powerwall</h1>
            
            <div className=" d-flex obtn gap-4 ">
              <button className="btn btn-light rounded ">Order Now</button>
              <button className="btn btn-dark rounded ">Demo Drive</button>
            </div>
          </div>
        </div>

        {/* 9th section  */}

        <div className="hero9" style={{ position: "relative" }}>
          <div className="p-5 justify-content-center align-items-center d-flex flex-column ">
            <h1 style={{ marginTop: "50px" }} className="">
              Accessories
            </h1>
            <button className="btn btn-light rounded obtn  ">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
