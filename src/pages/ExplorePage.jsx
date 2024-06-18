import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async (reset = false) => {
    try {
      const res = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      console.log("API response:", res.data);
      setData((prev) =>
        reset ? res.data.results : [...prev, ...res.data.results]
      );
      setTotalPageNo(res.data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      pageNo < totalPageNo
    ) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData(true);
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNo, totalPageNo]);

  return (
    <div className="p-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg text-semibold">
          Popular {params.explore} show
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-4">
          {data.map((exploreData, index) => (
            <Card
              key={exploreData.id}
              data={exploreData}
              media_type={params.explore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
