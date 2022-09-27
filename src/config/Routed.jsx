import React from "react";
import { Route, Routes } from "react-router-dom";


// import page
import LandingPage3 from "../pages/LandingPage3";
import DetailJurusan from "../pages/silabus/DetailJurusan";
import HomeSilabus from "../pages/silabus/HomeSilabus";

const Routed = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage3 />} />
      <Route path="/silabus" element={<HomeSilabus />} />
      <Route path="/detail-jurusan" element={<DetailJurusan />} />

    </Routes>
  );
};

export default Routed;
