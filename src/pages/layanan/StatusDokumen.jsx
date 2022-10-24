import React from 'react'
import Banner from '../../component/partials/Banner'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'

const StatusDokumen = () => {
    return (
        <>
            <Header4 />
            <Banner title={"Pengajuan Dokumen"} />

            {/* <section class="pt-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="card shadow rounded-2 p-0 mt-n5">

                                <div class="card-header border-bottom px-4 pt-3 pb-0">
                                    <ul class="nav nav-bottom-line py-0" id="course-pills-tab" role="tablist">

                                        <li class="nav-item me-2 me-sm-4" role="presentation">
                                            <button class="nav-link mb-2 mb-md-0 active" id="proses-pills-tab" data-bs-toggle="pill" data-bs-target="#proses-pills-tab" type="button" role="tab" aria-controls="proses-pills-tab" aria-selected="true">Proses</button>
                                        </li>

                                        <li class="nav-item me-2 me-sm-4" role="presentation">
                                            <button class="nav-link mb-2 mb-md-0" id="ditolak-pills-tab" data-bs-toggle="pill" data-bs-target="#ditolak-pills-tab" type="button" role="tab" aria-controls="ditolak-pills-tab" aria-selected="false">Ditolak</button>
                                        </li>

                                        <li class="nav-item me-2 me-sm-4" role="presentation">
                                            <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false">Discussion</button>
                                        </li>
                                    </ul>
                                </div>



                                <div class="card-body p-sm-4">

                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="proses-pills-tab" role="tabpanel" aria-labelledby="proses-pills-tab">
                                            <div className="card border-start border-primary border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h6 className="m-0">Surat Keterangan Mahasiswa</h6>

                                                    <div className="d-flex flex-column align-items-center">
                                                        <i className="bi bi-clock-history fs-5"></i>
                                                        <p className="m-0">Estimasi : 3-5 hari</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="ditolak-pills-tab" role="tabpanel" aria-labelledby="ditolak-pills-tab">
                                            <div className="card border-start border-danger border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="">
                                                        <h6 className="mb-1">Surat Keterangan Cuti Kuliah</h6>
                                                        <p className="text-danger fs-6 fw-semibold m-0">Dokumen Kurang Jelas</p>
                                                    </div>


                                                    <i className="bi bi-x-circle text-danger fs-5"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="selesai-tab-pane" role="tabpanel" aria-labelledby="selesai-tab" tabindex="0"><h1>Selesai</h1></div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            <section class="pt-0">
                <div class="container">
                    <div class="row">

                        <div class="col-12">
                            <div class="card shadow rounded-2 p-0 mt-n5">

                                <div class="card-header border-bottom px-4 pt-3 pb-0">
                                    <ul class="nav nav-bottom-line py-0" id="course-pills-tab" role="tablist">

                                        <li class="nav-item me-2 me-sm-4" role="presentation">
                                            <button class="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button" role="tab" aria-controls="course-pills-1" aria-selected="true">Proses</button>
                                        </li>

                                        <li class="nav-item me-2 me-sm-4" role="presentation">
                                            <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-2" type="button" role="tab" aria-controls="course-pills-2" aria-selected="false">Ditolak</button>
                                        </li>

                                        <li class="nav-item me-2 me-sm-4" role="presentation">
                                            <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-3" type="button" role="tab" aria-controls="course-pills-3" aria-selected="false">Selesai</button>
                                        </li>
                                    </ul>
                                </div>



                                <div class="card-body p-sm-4">
                                    <div class="tab-content" id="course-pills-tabContent">

                                        <div class="tab-pane fade show active" id="course-pills-1" role="tabpanel" aria-labelledby="course-pills-tab-1">

                                            <div className="card border-start border-primary border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h6 className="m-0">Surat Keterangan Mahasiswa</h6>

                                                    <div className="d-flex flex-column align-items-center">
                                                        <i className="bi bi-clock-history fs-5"></i>
                                                        <p className="m-0">Estimasi : 3-5 hari</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>



                                        <div class="tab-pane fade" id="course-pills-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
                                            <div className="card border-start border-danger border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="">
                                                        <h6 className="mb-1">Surat Keterangan Cuti Kuliah</h6>
                                                        <p className="text-danger fs-6 fw-semibold m-0">Dokumen Kurang Jelas</p>
                                                    </div>


                                                    <i className="bi bi-x-circle text-danger fs-5"></i>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="">
                    <div className="container">
                        <ul className="nav nav-tabs justify-content-center gap-2" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="proses-tab" data-bs-toggle="tab" data-bs-target="#proses-tab-pane" type="button" role="tab" aria-controls="proses-tab-pane" aria-selected="true">Proses</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="ditolak-tab" data-bs-toggle="tab" data-bs-target="#ditolak-tab-pane" type="button" role="tab" aria-controls="ditolak-tab-pane" aria-selected="false">Ditolak</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="selesai-tab" data-bs-toggle="tab" data-bs-target="#selesai-tab-pane" type="button" role="tab" aria-controls="selesai-tab-pane" aria-selected="false">Selesai</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="proses-tab-pane" role="tabpanel" aria-labelledby="proses-tab" tabindex="0">
                                <div className="card border-start border-primary border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="m-0">Surat Keterangan Mahasiswa</h6>

                                        <div className="d-flex flex-column align-items-center">
                                            <i className="bi bi-clock-history fs-5"></i>
                                            <p className="m-0">Estimasi : 3-5 hari</p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="tab-pane fade" id="ditolak-tab-pane" role="tabpanel" aria-labelledby="ditolak-tab" tabindex="0">
                                <div className="card border-start border-danger border-4 shadow-lg rounded-2 px-4 py-2 my-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="">
                                            <h6 className="mb-1">Surat Keterangan Cuti Kuliah</h6>
                                            <p className="text-danger fs-6 fw-semibold m-0">Dokumen Kurang Jelas</p>
                                        </div>


                                        <i className="bi bi-x-circle text-danger fs-5"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="selesai-tab-pane" role="tabpanel" aria-labelledby="selesai-tab" tabindex="0"><h1>Selesai</h1></div>
                        </div>

                    </div>
                </section> */}

            <Footer3 />
        </>
    )
}

export default StatusDokumen