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
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Showing"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={topRatedMoviesData}
        heading={"Top Rated"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={popularMoviesData}
        heading={"Popular"}
        media_type={"movie"}
      />
      <HorizontalScrollCard
        data={upcomingData}
        heading={"Upcoming"}
        media_type={"movie"}
      />
    </div>
  );
};

export default Home;
