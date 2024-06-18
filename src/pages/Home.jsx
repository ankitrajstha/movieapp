import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";

const Home = () => {
  const trendingMoviesData = useSelector(
    (state) => state.movieoData.bannerData
  );
  const [nowPlayingData, setNowPlayingData] = useState([]);

  const fetchNowPlayingData = async () => {
    try {
      const res = await axios.get("/movie/now_playing");
      setNowPlayingData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNowPlayingData();
  }, []);
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingMoviesData}
        heading={"Trending Shows"}
        trending={true}
      />
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Showing"} />
    </div>
  );
};

export default Home;
