import React from 'react'
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
                            <a href="/kontrak-krs" className="btn btn-success"><i class="fa fa-plus me-2" aria-hidden="true"></i>Matkul</a>
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

                            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header border-0 ">
                                            <h5 className="modal-title" id="exampleModalLabel">Konfirmasi</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Ajukan KRS ke dosen pembimbing?
                                        </div>
                                        <div className="modal-footer border-0 justify-content-center">
                                            <button type="button" className="btn btn-danger me-4">Batal</button>
                                            <button type="button" className="btn btn-success">Ajukan</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer3 />
        </>
    )
}

export default DrafKrs