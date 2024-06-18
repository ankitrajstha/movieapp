import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totoalPageNo, setTotalPageNo] = useState(0);
  console.log("params", params.explore);
  const fetchData = async () => {
    try {
      const res = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...res.data.results];
      });
      setTotalPageNo(res.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="p-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg text-semibold">
          Popular {params.explore} show
        </h3>
        <div className="grid grid-cols-[repeat">
          {data.map((exploreData, index) => (
            <Card key={index} data={exploreData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
