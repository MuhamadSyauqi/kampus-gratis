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
import HomePenyaluran from "../pages/penyalurankerja/HomePenyaluran";
import DetailKerja from "../pages/penyalurankerja/DetailKerja";
import UploadLamaran from "../pages/penyalurankerja/UploadLamaran";
import ProsesDokumen from "../pages/layanan/ProsesDokumen";
import StatusDokumen from "../pages/layanan/StatusDokumen";


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

      {/* Penyaluran Kerja */}
      <Route path="/penyaluran-kerja" element={<HomePenyaluran />} />
      <Route path="/detail-kerja" element={<DetailKerja />} />
      <Route path="/upload-lamaran" element={<UploadLamaran />} />

      {/* Layanan */}
      <Route path="/proses-dokumen" element={<ProsesDokumen />} />
      <Route path="/status-dokumen" element={<StatusDokumen />} />


    </Routes>
  );
};

export default Routed;
