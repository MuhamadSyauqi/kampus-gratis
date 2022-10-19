import React from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

import Banner from '../../component/partials/Banner'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'

const HomePenyaluran = () => {
    const handleDialog = async (e) => {
        e.preventDefault();
        const { value: formValues } = await Swal.fire({
            confirmButtonText: "Konfirmasi lamaran",
            html: `

            <div class="d-flex flex-column align-items-start mb-4 ps-2">
            <label for="cv">Resume/CV</label>
            <input id="cv" type="file" class="cv swal2-input p-2 mt-2 ms-0">
            </div>
            <div class="d-flex flex-column align-items-start mb-4 ps-2">
            <label for="nama_lengkap" >Nama Lengkap</label>
            <input id="nama_lengkap" class="nama_lengkap swal2-input mt-2 ms-0">
            </div>

            <div class="d-flex flex-column align-items-start mb-4 ps-2">
            <label for="email" >Email</label>
            <input id="email" type="email" class="email  swal2-input mt-2 ms-0">
            </div>

            <div class="d-flex flex-column align-items-start mb-4 ps-2">
            <label for="phone" >Phone</label>
            <input id="phone" class="phone swal2-input mt-2 ms-0">
            </div>

            <div class="d-flex flex-column align-items-start mb-4 ps-2">
            <label for="perusahaan_sebelumnya" >Perusahaan Sebelumnya</label>
            <input id="perusahaan_sebelumnya" class="perusahaan_sebelumnya swal2-input mt-2 ms-0">
            </div>

            <div class="d-flex flex-column align-items-start mb-4 ps-2">
            <label for="linkedin_url" >Linkedin Url</label>
            <input id="linkedin_url" class="linkedin_url swal2-input mt-2 ms-0">
            </div>

            <div class="d-flex flex-column align-items-start mb-4 ps-2">
            <label for="informasi_tambahan" >Informasi Tambahan</label>
            <textarea id="informasi_tambahan" class="swal2-input mt-2 ms-0" ></textarea>
            </div>
            `,
            focusConfirm: false,
            preConfirm: () => {
                console.log(document.getElementById('cv').files);
                return [
                    document.getElementById('cv').files,
                    document.getElementById('nama_lengkap').value,
                    document.getElementById('email').value,
                    document.getElementById('phone').value,
                    document.getElementById('perusahaan_sebelumnya').value,
                    document.getElementById('linkedin_url').value,
                    document.getElementById('informasi_tambahan').value,
                ];
            }
        })

        if (formValues) {
            Swal.fire(JSON.stringify(formValues))
        }
    }



    return (
        <>
            <Header4 />
            <Banner title="Penyaluran Kerja" />
            <section>
                <div className="container">
                    <div className="bg-light border p-4 rounded-2 mb-5">
                        <div class="row mb-4 align-items-center">

                            <div class="col-xl-6">
                                <form class="border rounded">
                                    <div class="input-group input-borderless">
                                        <input class="form-control me-1" type="search" placeholder="Search.." />
                                    </div>
                                </form>
                            </div>


                            <div class="col-xl-3 mt-3 mt-xl-0">
                                <form class="border rounded p-2 input-borderless">
                                    <select class="form-select form-select-sm js-choice border-0" aria-label=".form-select-sm">
                                        <option value="">Pekerjaan</option>
                                        <option>Magang</option>
                                        <option>Project</option>
                                    </select>
                                </form>
                            </div>


                            <div class="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">

                                <button class="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                                    <i class="fas fa-sliders-h me-1"></i> Show filter
                                </button>


                                <div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Terbaru
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Terlama
                                        </label>
                                    </div>
                                </div>

                                <button type="button" class="btn btn-primary mb-0 rounded z-index-1"><i class="fas fa-search"></i></button>
                            </div>

                        </div>
                    </div>

                    <div className="row justify-content-between">

                        <div className="col-md-6 mb-3">
                            <div className="card shadow-hover overflow-hidden bg-transparent border">

                                <div className="card-body">

                                    <div className="row justify-content-start">
                                        <div className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <img src="https://source.unsplash.com/random/" className="img-fluid rounded-2" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div>
                                                <Link to="/detail-kerja">
                                                    <h5 className="">Frontend Developer </h5>
                                                </Link>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <p className="fs-6 mb-0">Jobcy Technology Pvt.Ltd</p>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <p className="mb-0">
                                                            <i className="fa fa-map-marker me-1" aria-hidden="true"></i>
                                                            Jakarta
                                                        </p>
                                                    </li>
                                                </ul>
                                                <p className="mb-3">Rp.Salary</p>
                                                <span className="badge rounded-pill text-bg-success fw-semibold">Full Time</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-3 d-flex justify-content-end">
                                    <a href="" className="text-black" onClick={handleDialog}>
                                        Apply Now
                                        <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
            </section >
            <Footer3 />
        </>
    )
}

export default HomePenyaluran