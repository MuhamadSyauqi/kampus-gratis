import React from 'react'
import Swal from 'sweetalert2'

import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import InfoMatakuliah from '../../component/silabus/InfoMatakuliah'
import Matakuliah from '../../component/silabus/Matakuliah'
import Semester from '../../component/silabus/Semester'

const KontrakKrs = () => {

    const handleModal = () => {
        Swal.fire({
            title: "Konfirmasi",
            confirmButtonColor: '#000',
            confirmButtonText: "Sudah Pernah Mengambil",
            showDenyButton: true,
            denyButtonColor: '#000',
            denyButtonText: "Belum pernah mengambil",
            customClass: {
                title: "mb-5"
            }
        });
    }

    return (
        <>
            <Header4 />
            <main>
                <section className="p-0 m-0">
                    <BannerSilabus />
                </section>

                <section>
                    <div className="container text-dark">
                        <InfoMatakuliah />
                        <p>Maksimal SKS : 24</p>
                        <p>SKS Diambil : 24</p>
                        <a href="#" className="btn badge btn-success">Lihat Draft</a>

                    </div>
                </section>

                <section className="p-0">
                    <div className="container mb-5">
                        <Semester id={"1"}>
                            <div className="row justify-content-between align-items-center">
                                <div className="d-flex align-items-center col-md-7 mb-3 mb-md-0">
                                    <div className="ms-3">
                                        <a href="/detail-matakuliah"
                                            className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
                                            Pemodelan Dan Simulasi Peperangan</a>
                                        <ul className="nav nav-divider small mb-0">
                                            <li className="nav-item">Kode MK</li>
                                            <li className="nav-item">Jumlah SKS</li>
                                            <li className="nav-item">Wajib</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-3 ms-3 ms-md-0">
                                    <p className="m-0"><span className="fw-bold">18</span> Mahasiswa</p>
                                    <div className="badge bg-primary">Basic</div>
                                </div>

                                <div className="col-md-2 d-flex align-items-center justify-content-end ">
                                    <a href="#" className="m-0 rounded-circle me-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleModal}><i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                                    </a>


                                    {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header border-0 pb-5">
                                                    <h5 className="modal-title" id="exampleModalLabel">Konfirmasi</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-footer border-0">
                                                    <button type="button" className="btn btn-dark">Sudah Pernah Mengambil</button>
                                                    <button type="button" className="btn btn-dark">Belum Pernah Mengambil</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </Semester>
                    </div>
                </section>



            </main>
            <Footer3 />
        </>
    )
}

export default KontrakKrs