import React from "react";
import RecommendTools from "../components/home/recommend-tools";
import TopCompany from "../components/home/top-company";
import TopJob from "../components/home/top-job";
import HeaderHome from "../components/home/head";
const Home: React.FC = () => {
  return (
    <>
      <div className="container-default ">
        <HeaderHome></HeaderHome>
      </div>
      <div className=" mt-32 space-y-24">
        <div className="container-default  ">
          <RecommendTools></RecommendTools>
        </div>
        <div className=" bg-blue-extra">
          <div className="container-default">
            <TopCompany></TopCompany>
          </div>
        </div>
        <div className="container-default">
          <TopJob></TopJob>
        </div>
      </div>  
    </>
  );
};

export default Home;
