import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";

const Home = () => {
  const trendingMoviesData = useSelector(
    (state) => state.movieoData.bannerData
  );
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingMoviesData}
        heading={"Trending Shows"}
      />
    </div>
  );
};

export default Home;
