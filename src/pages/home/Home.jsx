import React from "react";
import "./Home.scss";
import Featured from "../../component/featured/Featured";
import TrustedBy from "../../component/trustedBy/TrustedBy";

const Home = () => {
  return (
    <div>
      <Featured></Featured>
       <TrustedBy></TrustedBy>
    </div>
  );
};

export default Home;
