import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import TabelMatkul from '../../component/silabus/homeSilabus/TabelMatkul'
import InfoMatakuliah from '../../component/silabus/InfoMatakuliah'

const DrafKrs = () => {
    const handleModal = () => {
        Swal.fire({
            title: "Konfirmasi",
            text: "Ajukan KRS ke dosen Pembimbing",
            confirmButtonText: "Ajukan",
            showCancelButton: true,
            cancelButtonText: "Batal",
            customClass: {
                confirmButton: "bg-success",
                cancelButton: "bg-danger"
            }
        })
            .then(result => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Berhasil Diajukan!",
                        icon: "success",
                        text: "Menunggu Persetujuan Dosen Pembimbing",
                        showConfirmButton: false
                    });
                }
            })
    }


    return (
        <>
            <Header4 />
            <BannerSilabus />
            <main>
                <section>
                    <div className="container">
                        <InfoMatakuliah />

                        <div className="d-flex justify-content-end">
                            <Link to="/kontrak-krs" className="btn btn-success"><i class="fa fa-plus me-2" aria-hidden="true"></i>Matkul</Link>
                        </div>
                        <TabelMatkul>
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 rounded-start">No</th>
                                    <th scope="col" className="border-0">Kode Mata kuliah</th>
                                    <th scope="col" className="border-0">Nama Mata kuliah</th>
                                    <th scope="col" className="border-0 rounded-end">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>

                                    <td>
                                        1
                                    </td>

                                    <td>IF202</td>

                                    <td>Logika Matematika</td>


                                    <td>
                                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>IF203</td>

                                    <td>Pemrograman Dasar</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger-soft btn-round mb-0"><i className="fas fa-fw fa-times"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </TabelMatkul>
                        <div className="d-flex justify-content-center py-4">
                            <button className="btn btn-success" onClick={handleModal}><i class="fa fa-plus me-2" aria-hidden="true"></i>Ajukan</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer3 />
        </>
    )
}

export default DrafKrs