import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const fetchData = async () => {
    try {
      const res = await axios.get(`/search/collection`, {
        params: {
          query: location?.search?.slice(3),
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...res.data.results];
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [location?.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg text-semibold">Search Results</h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData, index) => (
            <Card
              key={searchData.id + "search"}
              data={searchData}
              media_type={searchData.media_type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
