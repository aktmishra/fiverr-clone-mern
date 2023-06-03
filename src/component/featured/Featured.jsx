import React from "react";
import "./Featured.scss";
function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="public/img/search.png" alt="searchIcon" />
              <input type="text" placeholder="Try 'building Web App'"/>
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="right">
          <img src="public/img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
