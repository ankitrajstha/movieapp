import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingMoviesData = useSelector(
    (state) => state.movieoData.bannerData
  );
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingMoviesData}
        heading={"Trending Shows"}
        trending={true}
      />
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Showing"} />
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated"} />
    </div>
  );
};

export default Home;
