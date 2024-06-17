import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";

export default function App() {
  const fetchTreandingData = async () => {
    try {
      const res = await axios.get("/trending/all/week");
      const data = res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTreandingData();
  }, []);
  return (
    <>
      <div className="pb-14 lg:pb-0">
        <Header />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
        <MobileNavigation />
      </div>
    </>
  );
}
