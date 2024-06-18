import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingMoviesData = useSelector(
    (state) => state.movieoData.bannerData
  );
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedMoviesData } = useFetch("/movie/top_rated");
  const { data: popularMoviesData } = useFetch("/movie/popular");
  const { data: upcomingData } = useFetch("/movie/upcoming");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingMoviesData}
        heading={"Trending Shows"}
        trending={true}
      />
      <HorizontalScrollCard data={nowPlayingData} heading={"Now Showing"} />
      <HorizontalScrollCard data={topRatedMoviesData} heading={"Top Rated"} />
      <HorizontalScrollCard data={popularMoviesData} heading={"Popular"} />
      <HorizontalScrollCard data={upcomingData} heading={"Upcoming"} />
    </div>
  );
};

export default Home;
