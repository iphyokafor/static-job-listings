import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="wrapper">
            <div className="box a">
              <div>
                <img src={props.imgSrc} alt={props.imgAlt} />{" "}
                <div>
                  <p>
                    Photosnap{" "}
                    <span>
                      <button className="button-style">New</button>
                      <button className="button-style1">Featured</button>
                    </span>
                  </p>
                </div>
                <div>Senior frontend developer</div>
                <div>
                  <span style={{ display: "flex", margin: "5px 10px" }}>
                    <p>
                      <span>1d ago .</span>
                    </p>
                    <p>
                      <span>Full time .</span>
                    </p>
                    <p>
                      <span>USA .</span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="box b">
              <span>
                <div>
                  <span className="tag">Frontend</span>
                </div>
                <div>
                  <span className="tag">Senior</span>
                </div>
                <div>
                  <span className="tag">HTML</span>
                </div>
                <div>
                  <span className="tag">CSS</span>
                </div>
                <div>
                  <span className="tag">Javascript</span>
                </div>
              </span>
            </div>
            <div className="box c"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
