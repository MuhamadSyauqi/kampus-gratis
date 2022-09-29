import React from "react";
import { Route, Routes } from "react-router-dom";



// import page
import LandingPage3 from "../pages/LandingPage3";
import DetailJurusan from "../pages/silabus/DetailJurusan";
import DetailMatakuliah from "../pages/silabus/DetailMatakuliah";
import HomeSilabus from "../pages/silabus/HomeSilabus";
import KontrakKrs from "../pages/silabus/KontrakKrs";
import DrafKrs from "../pages/silabus/DrafKrs";
import DrafPengajuan from "../pages/silabus/DrafPengajuan";


const Routed = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage3 />} />
      <Route path="/silabus" element={<HomeSilabus />} />
      <Route path="/detail-jurusan" element={<DetailJurusan />} />
      <Route path="/detail-matakuliah" element={<DetailMatakuliah />} />
      <Route path="/kontrak-krs" element={<KontrakKrs />} />
      <Route path="/draf-krs" element={<DrafKrs />} />
      <Route path="/draf-pengajuan" element={<DrafPengajuan />} />
    </Routes>
  );
};

export default Routed;
