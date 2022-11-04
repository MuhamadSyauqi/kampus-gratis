import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import { Link } from 'react-router-dom'

const DetailAcara3 = () => {
    return (
        <>
            <Header4 />
            <main>
                <section className="p-0 m-0">
                    <BannerSilabus />
                </section>
                <div className="container">

                    <div className="row">
                        <div class="col-sm-6 col-xll-4 mt-4">
                            <div class="card shadow h-100">


                                <img src="assets/images/courses/4by3/07.jpg" class="card-img-top" alt="course image" />
                                <div class="card-body pb-0 d-flex justify-content-between align-items-center p-2">
                                    <div>
                                        <Link to="/detail-acara2">
                                            <h5>Webinar3</h5>
                                        </Link>

                                        <p>Zoom</p>

                                        <div className="col-lg-20">

                                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                In a interdum odio. Mauris consectetur tortor ut enim efficitur tincidunt.</p>

                                            <div className="row justify-content-center mb-5">
                                                <div className="col-md-10">
                                                    <div className="accordion" id="accordion">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button collapsed bg-dark text-light text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                                    <p className='ms-auto p-0 m-0'>Keterangan</p>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                                                                <div className="accordion-body bg-scondary text-light">

                                                                    <div class="container">
                                                                        <div class="row">
                                                                            <div class="col">

                                                                                <div class="d-flex gap-2 align item-center">
                                                                                    <a href="#" class="text-dark"><i class="fa fa-street-view" aria-hidden="true"></i></a>
                                                                                    <p className='fw-bold text-dark mb-0'>Kapasitas</p>


                                                                                </div>
                                                                                <div class="d-flex gap-2 mb-2 align item-center"></div>
                                                                                <p className='text-dark'>25/50</p>
                                                                            </div>

                                                                            <div class="col">
                                                                                <div class="d-flex gap-2 align item-center">
                                                                                    <a href="#" class="text-dark"><i class="fa fa-tags" aria-hidden="true"></i></a>
                                                                                    <p className="fw-bold text-dark mb-0">Harga Tiket</p>

                                                                                </div>
                                                                                <div class="d-flex gap-2 mb-2 align item-center"></div>
                                                                                <p className='text-dark'>Gratis</p>
                                                                            </div>


                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col">

                                                                                <div class="d-flex gap-2 align item-center">
                                                                                    <a href="#" class="text-dark"><i class="fa fa-mobile" aria-hidden="true"></i></a>
                                                                                    <p className="fw-bold text-dark mb-0">Jenis Kegiatan</p>

                                                                                </div>
                                                                                <div class="d-flex gap-2 mb-2 align item-center"></div>
                                                                                <p className='text-dark'>Online</p>
                                                                            </div>
                                                                            <div class="col">

                                                                                <div class="d-flex gap-2 align item-center">
                                                                                    <a href="#" class="text-dark"><i class="fa fa-clock" aria-hidden="true"></i></a>
                                                                                    <p className="fw-bold text-dark mb-0">15 Agustus 2022</p>

                                                                                </div>
                                                                                <div class="d-flex gap-2 mb-2 align item-center"></div>
                                                                                <p className='text-dark'>19.00-21.30</p>
                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                            <p className='ms-auto p-1 m-1 fw-bold text-dark'>Description</p>

                                            <p className="text-black">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a interdum odio. Mauris consectetur tortor ut enim efficitur tincidunt. Morbi porttitor auctor risus, vitae pretium nisi.
                                                Quisque interdum tortor eget odio rutrum, non semper urna cursus. Nullam rhoncus diam et nulla semper, ac tempus tellus pellentesque. Donec tincidunt laoreet nunc sit amet efficitur.
                                                Phasellus neque lacus, facilisis nec enim ac, sollicitudin euismod diam. Curabitur placerat ex ac lectus elementum blandit. Sed efficitur condimentum tortor. Proin ac nisl augue.
                                                Vivamus mollis iaculis mauris. Donec consequat erat lectus, eu lobortis nunc tincidunt vitae.</p>
                                        </div>



                                        <p className="ms-auto p-1 m-1 fw-bold text-dark">Notes</p>

                                        <p className="text-black">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a interdum odio. Mauris consectetur tortor ut enim efficitur tincidunt. Morbi porttitor auctor risus, vitae pretium nisi.
                                            Quisque interdum tortor eget odio rutrum, non semper urna cursus.</p>




                                    </div>

                                    <div class="d-flex justify-content-end mb-2 align item-center">
                                        <a href="#" class="text-dark"><i class="fa fa-share-alt" aria-hidden="true"></i></a>


                                    </div>

                                    <div className="d-flex justify-content-center py-4">

                                    </div>
                                </div>
                                <div className="d-flex justify-content-center py-4">
                                    <Link to="/tampilan-berhasil" className="btn btn-dark" >Ikuti kegiatan</Link>


                                </div>

                            </div>


                        </div>




                    </div>

                </div>
                <Footer3 />
            </main>
        </>
    )
}

export default DetailAcara3;
<Header4 />