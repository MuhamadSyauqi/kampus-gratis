import React from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


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
        })
            .then(async result => {
                if (result.isConfirmed) {
                    const { value: file } = await Swal.fire({
                        title: 'Select image',
                        input: 'file',
                        inputAttributes: {
                            'accept': 'image/*',
                            'aria-label': 'Upload your profile picture'
                        },
                        confirmButtonColor: "#000"
                    })

                    if (file) {
                        const reader = new FileReader()
                        reader.onload = (e) => {
                            Swal.fire({
                                title: 'Your uploaded picture',
                                imageUrl: e.target.result,
                                imageAlt: 'The uploaded picture'
                            })
                        }
                        reader.readAsDataURL(file)
                    }
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


                        <div className="d-inline-flex flex-column align-items-start">
                            <Link to="/draf-krs" className="btn badge btn-success ">Lihat Draft</Link>
                            <Link to="/draf-pengajuan" className="btn badge btn-success d-inline">Lihat Pengajuan Berkas</Link>
                        </div>


                    </div>
                </section>

                <section className="p-0">
                    <div className="container mb-5">
                        <Semester id={"1"}>
                            <div className="row justify-content-between align-items-center">
                                <div className="d-flex align-items-center col-md-7 mb-3 mb-md-0">
                                    <div className="ms-3">
                                        <Link to="/detail-matakuliah"
                                            className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
                                            Pemodelan Dan Simulasi Peperangan</Link>
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