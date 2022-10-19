import React from 'react'
import Swal from 'sweetalert2';


import { BiTime } from "react-icons/bi";
import { BiMoney } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import { FaCity } from "react-icons/fa"

import Banner from '../../component/partials/Banner'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'



const DetailKerja = () => {
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
        <div className="p-5">
            <Header4 />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card shadow p-4 mb-4">
                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <img src="https://source.unsplash.com/random/200x200" className="rounded-2" alt="" />
                                    <div>
                                        <span className="badge bg-success mb-2">fulltime</span>
                                        <h4>Frontend Developer</h4>
                                    </div>
                                </div>
                                <hr className="border border-dark" />
                                <div className="mt-3">
                                    <h5 className="mb-4">Deskripsi</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis feugiat augue, vitae rutrum neque commodo vitae. Aliquam vulputate tellus in tristique pulvinar. Sed ullamcorper imperdiet turpis, vitae pharetra erat convallis et. Nam hendrerit sit amet nibh nec tincidunt. Maecenas non ornare ligula, sed elementum purus. Nullam efficitur sem purus, sed hendrerit dolor tincidunt non. Phasellus in ornare arcu. Quisque scelerisque, diam auctor viverra sollicitudin, tortor lectus dapibus justo, id facilisis metus justo quis sapien. Morbi quis rutrum nisl. Proin in arcu vel libero molestie fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut urna nulla. Donec ut velit dui. Ut suscipit dignissim dolor sit amet commodo. Integer felis nunc, varius non ullamcorper ac, ultricies a dolor. Etiam dapibus elit vel enim efficitur gravida.
                                    </p>
                                </div>
                                <hr className="border border-dark" />
                                <div className="mt-3">
                                    <h5 className="mb-4">Fasilitas Lainnya</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis feugiat augue, vitae rutrum neque commodo vitae. Aliquam vulputate tellus in tristique pulvinar. Sed ullamcorper imperdiet turpis, vitae pharetra erat convallis et. Nam hendrerit sit amet nibh nec tincidunt. Maecenas non ornare ligula, sed elementum purus. Nullam efficitur sem purus, sed hendrerit dolor tincidunt non. Phasellus in ornare arcu. Quisque scelerisque, diam auctor viverra sollicitudin, tortor lectus dapibus justo, id facilisis metus justo quis sapien. Morbi quis rutrum nisl. Proin in arcu vel libero molestie fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut urna nulla. Donec ut velit dui. Ut suscipit dignissim dolor sit amet commodo. Integer felis nunc, varius non ullamcorper ac, ultricies a dolor. Etiam dapibus elit vel enim efficitur gravida.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card shadow p-2 mb-4 z-index-9">
                                <div class="card-body px-3">
                                    <div className="d-flex gap-3 align-items-center mb-2">
                                        <div className="bg-primary text-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '2rem', height: '2rem' }}>
                                            <BiTime />
                                        </div>
                                        <p className="m-0 fw-semibold">Fulltime</p>
                                    </div>

                                    <div className="d-flex gap-3 align-items-center mb-2">
                                        <div className="bg-primary text-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '2rem', height: '2rem' }}>
                                            <BiMoney />
                                        </div>
                                        <p className="m-0 fw-semibold">Salary</p>
                                    </div>

                                    <div className="d-flex gap-3 align-items-center mb-2">
                                        <div className="bg-primary text-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '2rem', height: '2rem' }}>
                                            <GoLocation />
                                        </div>
                                        <p className="m-0 fw-semibold">Lokasi Pekerjaan</p>
                                    </div>


                                    <div className="d-flex gap-3 align-items-center mb-2">
                                        <div className="bg-primary text-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ widht: '2rem', height: '2rem' }}>
                                            <FaCity />
                                        </div>
                                        <p className="m-0 fw-semibold">Kota</p>
                                    </div>

                                </div>
                            </div>

                            <div class="card shadow p-2 mb-4 z-index-9">
                                <div class="card-body px-3">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="https://source.unsplash.com/random/70x70" className="img-fluid rounded-2" alt="" />
                                        </div>
                                        <div>
                                            <h5 className="m-0">Nama perusahaan</h5>
                                            <p className="m-0">Nama HRD</p>
                                            <p className="m-0">Assessment and Recruitment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="d-flex justify-content-end">
                                <a href="" className="text-black" onClick={handleDialog}>
                                    Apply Now
                                    <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                                </a>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
            <Footer3 />
        </div>
    )
}

export default DetailKerja