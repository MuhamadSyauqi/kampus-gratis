import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'

const UploadLamaran = () => {
    return (
        <div>
            <Header4 />
            <section className="py-5">
                <div className="container card shadow my-5 p-4">
                    <form class="row g-3">


                        <div class="col-12">
                            <div class="row g-xl-0 align-items-center">
                                <div class="col-lg-4">
                                    <h6 class="mb-lg-0">Nama Lengkap <span class="text-danger">*</span></h6>
                                </div>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control" id="nama_lengkap" name="nama_lengkap" />
                                </div>
                            </div>
                        </div>


                        <div class="col-12">
                            <div class="row g-xl-0 align-items-center">
                                <div class="col-lg-4">
                                    <h6 class="mb-lg-0">Email <span class="text-danger">*</span></h6>
                                </div>
                                <div class="col-lg-8">
                                    <input type="email" class="form-control" id="email" name="email" />
                                </div>
                            </div>
                        </div>


                        <div class="col-12">
                            <div class="row g-xl-0 align-items-center">
                                <div class="col-lg-4">
                                    <h6 class="mb-lg-0">Phone <span class="text-danger">*</span></h6>
                                </div>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control" id="phone" name="phone" />
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="row g-xl-0 align-items-center">
                                <div class="col-lg-4">
                                    <h6 class="mb-lg-0">Perusahaan sebelumnya <span class="text-danger">*</span></h6>
                                </div>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control" id="perusahaan_sebelumnya" name="perusahaan_sebelumnya" />
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="row g-xl-0 align-items-center">
                                <div class="col-lg-4">
                                    <h6 class="mb-lg-0">linkedin Url<span class="text-danger">*</span></h6>
                                </div>
                                <div class="col-lg-8">
                                    <input type="text" class="form-control" id="linkedin_url" name="linkedin_url" />
                                </div>
                            </div>
                        </div>



                        <div class="col-12">
                            <div class="row g-xl-0">
                                <div class="col-lg-4">
                                    <h6 class="mb-lg-0">Informasi Tambahan <span class="text-danger">*</span></h6>
                                </div>
                                <div class="col-lg-8">
                                    <textarea class="form-control" rows="3" placeholder="" name="informasi_tambahan"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="row g-xl-0 align-items-center">
                                <div class="col-lg-4">
                                    <h6 class="mb-lg-0">Resume/CV<span class="text-danger">*</span></h6>
                                </div>
                                <div class="col-lg-8">
                                    <input type="file" class="form-control" id="resume" name="resume" />
                                </div>
                            </div>
                        </div>




                        <div class="col-12 text-sm-end">
                            <button class="btn btn-primary mb-0">Konfirmasi lamaran</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer3 />
        </div>
    )
}

export default UploadLamaran