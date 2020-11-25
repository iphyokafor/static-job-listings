import React from "react";

const CardItem = () => {
  return (
    <div>
      <div className="jobDescription">
        <span>
          <h6>Photosnap</h6>
          <button>Featured</button>
          <button>New</button>
        </span>
      </div>
      <div className="jobTitle">Senior Frontend Developer</div>
      <div className="jobTime">
        <span>1 day ago</span>
      </div>
    </div>
  );
};

export default CardItem;
