import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
