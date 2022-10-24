import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'

const ProsesDokumen = () => {
    return (
        <div>
            <Header4 />
            <section className="py-5">
                <div className="container card shadow my-5 p-4">
                    <form className="row g-3">


                        <div className="col-12">
                            <div className="row g-xl-0 align-items-center">
                                <div className="col-lg-4">
                                    <h6 className="mb-lg-0">Nama <span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" id="nama" name="nama" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row g-xl-0 align-items-center">
                                <div className="col-lg-4">
                                    <h6 className="mb-lg-0">Nim<span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-lg-8">
                                    <input type="text" className="form-control" id="nim" name="nim" />
                                </div>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="row g-xl-0 align-items-center">
                                <div className="col-lg-4">
                                    <h6 className="mb-lg-0">Email <span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-lg-8">
                                    <input type="email" className="form-control" id="email" name="email" />
                                </div>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="row g-xl-0 align-items-center">
                                <div className="col-lg-4">
                                    <h6 className="mb-lg-0">Nomer Wa <span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-lg-8">
                                    <input type="tel" className="form-control" id="phone" name="phone" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row g-xl-0 align-items-center">
                                <div className="col-lg-4">
                                    <h6 className="mb-lg-0">Prioritas <span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-lg-8">
                                    <select class="form-select" id="">
                                        <option selected>Choose...</option>
                                        <option value="darurat">Darurat</option>
                                        <option value="sedang">Sedang</option>
                                        <option value="biasa">Biasa</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="row g-xl-0">
                                <div className="col-lg-4">
                                    <h6 className="mb-lg-0">Pesan <span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-lg-8">
                                    <textarea className="form-control" rows="3" placeholder="" name="informasi_tambahan"></textarea>
                                </div>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="row g-xl-0 align-items-center">
                                <div className="col-lg-4">
                                    <h6 className="mb-lg-0">Resume/CV<span className="text-danger">*</span></h6>
                                </div>
                                <div className="col-lg-8">
                                    <input type="file" className="form-control" id="resume" name="resume" />
                                </div>
                            </div>
                        </div>




                        <div className="col-12 text-sm-end">
                            <button className="btn btn-primary mb-0">Ajukan Dokumen</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer3 />
        </div>
    )
}

export default ProsesDokumen