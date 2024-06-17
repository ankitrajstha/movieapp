import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";

export default function App() {
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
