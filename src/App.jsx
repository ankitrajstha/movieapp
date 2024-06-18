import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieoSlice";

export default function App() {
  const dispatch = useDispatch();

  const fetchTreandingData = async () => {
    try {
      const res = await axios.get("/trending/all/week");
      dispatch(setBannerData(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchConfiguration = async () => {
    try {
      const res = await axios.get("/configuration");
      dispatch(setImageURL(res.data.images.secure_base_url + "original"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTreandingData();
    fetchConfiguration();
  }, []);

  return (
    <>
      <div className="pb-14 lg:pb-0">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <MobileNavigation />
      </div>
    </>
  );
}
