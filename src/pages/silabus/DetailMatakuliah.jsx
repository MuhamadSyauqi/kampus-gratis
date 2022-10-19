import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import InfoMatakuliah from '../../component/silabus/InfoMatakuliah'

const Before = () => {
    return (
        <div className="container">
            <InfoMatakuliah />
            <div className="row justify-content-center mb-5">
                <div className="col-md-10">
                    <div className="accordion" id="accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed bg-dark text-light text-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <p className='ms-auto p-0 m-0'>Deskripsi MataKuliah</p>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                                <div className="accordion-body bg-secondary text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a interdum odio. Mauris consectetur tortor ut enim efficitur tincidunt. Morbi porttitor auctor risus, vitae pretium nisi. Quisque interdum tortor eget odio rutrum, non semper urna cursus. Nullam rhoncus diam et nulla semper, ac tempus tellus pellentesque. Donec tincidunt laoreet nunc sit amet efficitur. Phasellus neque lacus, facilisis nec enim ac, sollicitudin euismod diam. Curabitur placerat ex ac lectus elementum blandit. Sed efficitur condimentum tortor. Proin ac nisl augue. Vivamus mollis iaculis mauris. Donec consequat erat lectus, eu lobortis nunc tincidunt vitae.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* <div>
                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Kompetensi Dasar</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Indikator</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>


                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Pengalaman Pembelajaran</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="d-flex justify-content-center align-items-center col-md-4 border border-dark p-4">
                            <p className="m-0 fw-bold">Materi Ajar</p>
                        </div>
                        <div className="col-md-6 border border-dark"></div>
                    </div>

                </div> */}

            <div className="row justify-content-center py-5 px-3 px-md-0">
                <div className="col-md-10 p-0 detail-matkul">
                    <table className='table table-responsive rounded-3 m-0 text-dark'>
                        <tr>
                            <td className="col p-4 text-center detail-title">Kompetensi Dasar</td>
                            <td className="col-9"></td>
                        </tr>
                        <tr>
                            <td className="col p-4 text-center">Indikator</td>
                            <td className="col-9"></td>
                        </tr>
                        <tr>
                            <td className="col p-4 text-center">Pengalaman Pembelajaran</td>
                            <td className="col-9"></td>
                        </tr>
                        <tr>
                            <td className="col p-4 text-center">Materi Ajar</td>
                            <td className="col-9"></td>
                        </tr>
                        <tr>
                            <td className="col p-4 text-center">Waktu</td>
                            <td className="col-9"></td>
                        </tr>
                        <tr>
                            <td className="col p-4 text-center">Alat,Bahan,Sumber Ajar</td>
                            <td className="col-9"></td>
                        </tr>
                        <tr>
                            <td className="col p-4 text-center">Penilaian</td>
                            <td className="col-9"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}


const After = () => {
    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-xl-8">
                    <div className="row g-4">
                        <div className="col-12">
                            <h2 className="mb-4">Pemodelan Dan Simulasi Peperangan</h2>
                            <p className="mb-4">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>

                            <ul className="list-inline mb-0">
                                <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="fas fa-star me-2"></i>Teknik Mesin</li>
                                <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate me-2"></i>Genap(IV/Empat)</li>
                                <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="fas fa-signal me-2"></i>2 SKS</li>
                                <li className="list-inline-item fw-light h6 me-3 mb-1 mb-sm-0"><i className="fas fa-chalkboard-teacher me-2"></i>Steve Rogers</li>
                            </ul>
                        </div>

                        <div className="col-12">
                            <div className="card border">

                                <div className="card-header border-bottom">
                                    <h3 className="mb-0">Course description</h3>
                                </div>



                                <div className="card-body">
                                    <p className="mb-3">Welcome to the <strong> Digital Marketing Ultimate Course Bundle - 12 Courses in 1 (Over 36 hours of content)</strong></p>
                                    <p className="mb-3">In this practical hands-on training, you’re going to learn to become a digital marketing expert with this <strong> ultimate course bundle that includes 12 digital marketing courses in 1!</strong></p>
                                    <p className="mb-0">If you wish to find out the skills that should be covered in a basic digital marketing course syllabus in India or anywhere around the world, then reading this blog will help. Before we delve into the advanced <strong><a href="#" className="text-reset text-decoration-underline">digital marketing course</a></strong> syllabus, let’s look at the scope of digital marketing and what the future holds.</p>


                                    <p className="my-3">We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
                                    <p className="mb-0">Behavioral psychology and influence triggers which are crucial for becoming a well rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>


                                    <div class="row my-5">
                                        <div class="col-md-6">

                                            <ul class="list-group list-group-borderless">
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="fa fa-tasks text-primary" aria-hidden="true"></i>Kompetensi Dasar :</span>

                                                </li>
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="fa fa-bar-chart text-primary" aria-hidden="true"></i>Indikator : </span>

                                                </li>
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="fas fa-fw fa-font text-primary me-2"></i>Pengalaman Pembelajaran</span>

                                                </li>
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="bi fa-fw bi-translate text-primary me-2"></i>Language:</span>
                                                    <span class="h6">English</span>
                                                </li>
                                            </ul>

                                        </div>

                                        <div class="col-md-6">

                                            <ul class="list-group list-group-borderless">
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="bi fa-fw bi-person-circle text-primary me-2"></i>Published by:</span>
                                                    <span class="h6">Dennis Barrett</span>
                                                </li>
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="bi fa-fw bi-eye-fill text-primary me-2"></i>Visited by:</span>
                                                    <span class="h6">18K</span>
                                                </li>
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="bi fa-fw bi-bag-fill text-primary me-2"></i>Purchase by:</span>
                                                    <span class="h6">8245</span>
                                                </li>
                                                <li class="list-group-item px-0">
                                                    <span class="h6 fw-light"><i class="bi fa-fw bi-star-fill text-primary me-2"></i>Rating/Review:</span>
                                                    <span class="h6">4.5 (568)</span>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4">
                    <div data-sticky data-margin-top="80" data-sticky-for="768">
                        <div className="row g-4">
                            <div className="col-md-6 col-xl-12">

                                <div className="card card-body border p-4">
                                    <ul className="list-group list-group-borderless border-0">
                                        <li className="list-group-item px-0 d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-book-open text-primary"></i>Lectures</span>
                                            <span>30</span>
                                        </li>
                                        <li className="list-group-item px-0 d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-clock text-primary"></i>Duration</span>
                                            <span>4h 50m</span>
                                        </li>
                                        <li className="list-group-item px-0 d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-signal text-primary"></i>Skills</span>
                                            <span>Beginner</span>
                                        </li>
                                        <li className="list-group-item px-0 d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-globe text-primary"></i>Language</span>
                                            <span>English</span>
                                        </li>
                                        <li className="list-group-item px-0 d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-user-clock text-primary"></i>Deadline</span>
                                            <span>Nov 30 2021</span>
                                        </li>
                                        <li className="list-group-item px-0 d-flex justify-content-between">
                                            <span className="h6 fw-light mb-0"><i className="fas fa-fw fa-medal text-primary"></i>Certificate</span>
                                            <span>Yes</span>
                                        </li>
                                    </ul>

                                    <hr />


                                    <div className="d-sm-flex align-items-center">

                                        <div className="avatar avatar-xl">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                                        </div>
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h5 className="mb-0"><a href="#">By Jacqueline Miller</a></h5>
                                            <p className="mb-0 small">Founder Eduport company</p>
                                        </div>
                                    </div>


                                    <div className="d-sm-flex justify-content-sm-between align-items-center mt-0 mt-sm-2">

                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning"></i></li>
                                            <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning"></i></li>
                                            <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                                        </ul>


                                        <button className="btn btn-sm btn-primary mb-0 mt-2 mt-sm-0">Follow</button>
                                    </div>
                                </div>

                            </div>


                            <div className="col-md-6 col-xl-12">
                                <div className="card card-body border p-4">
                                    <h4 className="mb-3">Popular Tags</h4>
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">blog</a> </li>
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">business</a> </li>
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">theme</a> </li>
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">bootstrap</a> </li>
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">data science</a> </li>
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">web development</a> </li>
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">tips</a> </li>
                                        <li className="list-inline-item"> <a className="btn btn-outline-light btn-sm" href="#">machine learning</a> </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const DetailMatakuliah = () => {
    return (
        <>
            <Header4 />
            {/* <BannerSilabus /> */}


            <section className="pt-5 pt-xl-5 mt-5">
                <Before />
                <After />
            </section>


            <Footer3 />

        </>
    )
}

export default DetailMatakuliah