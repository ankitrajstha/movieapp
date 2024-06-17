import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % bannerData.length);
  };

  const handlePrevious = () => {
    setCurrentImage(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerData]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => (
          <div
            key={index}
            className={`min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all`}
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            <div className="w-full h-full">
              <img
                src={imageURL + data.backdrop_path}
                alt="Movie Banner"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute top-0 w-full h-full hidden lg:flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <button
                className="bg-white p-1 rounded-full text-2xl text-black z-10"
                onClick={handlePrevious}
              >
                <FaAngleLeft />
              </button>
              <button
                className="bg-white p-1 rounded-full text-2xl text-black z-10"
                onClick={handleNext}
              >
                <FaAngleRight />
              </button>
            </div>

            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

            <div className="container mx-auto">
              <div className="container mx-auto absolute bottom-0 max-w-md px-3">
                <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                  {data.title || data.name}
                </h2>
                <p className="text-ellipsis line-clamp-3 my-2">
                  {data.overview}
                </p>
                <div className="flex items-center gap-4">
                  <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                  <span>|</span>
                  <p>View: {Number(data.popularity).toFixed(0)}</p>
                </div>
                <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerHome;
