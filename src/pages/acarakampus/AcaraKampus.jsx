import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import { Link  } from 'react-router-dom'

const AcaraKampus = () => {
    return (
        <>
        <Header4/>
            <main>
                <section className="p-0 m-0">
                    <BannerSilabus />
                </section>
                <div className="container">

                    <div className="row">
                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card shadow h-100">


                                <img src="assets/images/courses/4by3/07.jpg" class="card-img-top" alt="course image" />
                                <div class="card-body pb-0 d-flex justify-content-between align-items-center p-2">
                                    <div>
                                        <Link to="/detail-acara">
                                        <h5>Webinar1</h5>
                                        </Link>
                                        <p>Zoom</p>
                                        <p>Senin,20 September 2022</p>
                                        <p>Gratis</p>
                                    </div>

                                    <div class="d-flex justify-content-end mb-2 align item-">
                                        <a href="#" class="text-dark"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                                    </div>
                                </div>


                            </div>


                        </div>

                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card shadow h-100">


                                <img src="assets/images/courses/4by3/07.jpg" class="card-img-top" alt="course image" />
                                <div class="card-body pb-0 d-flex justify-content-between align-items-center">
                                    <div>
                                    <Link to="/detail-acara2">
                                        <h5>Webinar2</h5>
                                        </Link>
                                        <p>Zoom</p>
                                        <p>Selasa,21 September 2022</p>
                                        <p>Gratis</p>
                                    </div>

                                    <div class="d-flex justify-content-end mb-2 align item-">
                                        <a href="#" class="text-dark"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                                    </div>
                                </div>


                            </div>


                        </div>


                        <div class="col-sm-6 col-xl-4 mt-4">
                            <div class="card shadow h-100">


                                <img src="assets/images/courses/4by3/07.jpg" class="card-img-top" alt="course image" />
                                <div class="card-body pb-0 d-flex justify-content-between align-items-center">
                                    <div>
                                    <Link to="/detail-acara3">
                                        <h5>Webinar3</h5>
                                        </Link>
                                        <p>Zoom</p>
                                        <p>Rabu,22 September 2022</p>
                                        <p>Gratis</p>
                                    </div>

                                    <div class="d-flex justify-content-end mb-2 align item-">
                                        <a href="#" class="text-dark"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                                    </div>
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

export default AcaraKampus;
<Header4 />