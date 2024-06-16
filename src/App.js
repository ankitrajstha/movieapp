import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
