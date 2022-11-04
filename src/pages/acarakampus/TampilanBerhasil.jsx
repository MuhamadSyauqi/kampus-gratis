import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import { Link } from 'react-router-dom'

const TampilanBerhasil = () => {
    return (
        <>
            <Header4 />
            <main>
                <section className="p-0 m-0">
                    <BannerSilabus />
                </section>
                <div className="container">
                    <div className="row justify-content-center text-center py-3">
                        <div className="col-md-8">
                            <button className="btn fs-1"><i class="fa fa-check-circle" aria-hidden="true"></i></button>
                            <h1 className="my-4">Pembelian Tiket Sudah Berhasil</h1>
                            <p className='ms-auto p-1 m-1 text-dark justify-content-center mb-4'>
                                Tiket webinar kamu berhasil di distribusikan ke pihak kami. Selanjutnya kami akan memberikan
                                konfirmasi dalam waktu maksimal 5 hari kerja untuk status pengajuan Pembelian
                                tiket pada masing jadwal webinar yang dipilih.
                            </p>
                            <Link to="/acara-kampus" className="btn btn-dark" >PILIH WEBINAR LAINNYA</Link>
                        </div>

                    </div>

                </div>
            </main>
            <Footer3 />

        </>
    )
}

export default TampilanBerhasil;
<Header4 />