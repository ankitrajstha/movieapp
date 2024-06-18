import React from "react";
import { useParams } from "react-router";
import useFetchDetails from "../hooks/useFetchDetail";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  const { data } = useFetchDetails(`/${params?.explore}/${params.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const duration = data?.runtime
    ? (Number(data.runtime) / 60).toFixed(1).split(".")
    : [0, 0];
  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover"
            alt="CoverImage"
          />
        </div>

        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 lg: w-fit">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 w-80 object-cover rounded"
            alt="CoverImage"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>
          <div className="flex items-center my-1 gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)} +</p>
            <span>|</span>
            <p>View : {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-1">Overview</h3>
          <p>{data?.overview}</p>
          <div>
            <p>Status : {data?.status}</p>
            <span>|</span>
            <p>Release Date : {data?.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
