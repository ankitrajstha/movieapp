import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[230px] max-w-[230px] h-80 rounded relative overflow-hidden block cursor-pointer"
    >
      <img
        src={imageURL + data?.poster_path}
        alt="Show poster"
        className="hover:scale-[1.12] transition-all duration-100 ease-in-out"
      />

      <div className="absolute top-0">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3xl rounded bg-black/60 overflow-hidden">
            #{index} Trending
          </div>
        )}
      </div>

      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between">
          <p>{data.release_date || data.first_air_date}</p>
          <p>Rating: {Number(data.vote_average).toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
