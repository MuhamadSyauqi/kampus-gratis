import { Route, Routes, BrowserRouter } from "react-router-dom";

import LandingPage3 from './pages/LandingPage3';
import HomeSilabus from './pages/silabus/HomeSilabus';
import DetailJurusan from './pages/silabus/DetailJurusan';
import DetailMatakuliah from "./pages/silabus/DetailMatakuliah";
import KontrakKrs from "./pages/silabus/KontrakKrs";
import DrafKrs from "./pages/silabus/DrafKrs";
import DrafPengajuan from "./pages/silabus/DrafPengajuan";
import HomePenyaluran from "./pages/penyalurankerja/HomePenyaluran";
import DetailKerja from "./pages/penyalurankerja/DetailKerja";
import UploadLamaran from "./pages/penyalurankerja/UploadLamaran";
import ProsesDokumen from "./pages/layanan/ProsesDokumen";
import StatusDokumen from "./pages/layanan/StatusDokumen";
import HomeLayanan from "./pages/layanan/HomeLayanan";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="/layanan-konsultasi" element={<HomeLayanan />} />
        <Route path="/proses-dokumen" element={<ProsesDokumen />} />
        <Route path="/status-dokumen" element={<StatusDokumen />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
