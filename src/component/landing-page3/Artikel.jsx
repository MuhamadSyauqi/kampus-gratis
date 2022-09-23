import React from 'react'
import MySlider from '../ui/MySlider'

const Artikel = () => {
    return (
        <section>
            <div className="container text-dark">
                <div className="row section-title justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2>Artikel</h2>
                    </div>
                </div>
                <MySlider autoplay={false}>
                    <div class="card bg-transparent">
                        <div class="position-relative">
                            <img src="assets/images/courses/4by3/21.jpg" class="card-img" alt="course image" />

                            <div class="card-img-overlay d-flex align-items-start flex-column p-3">

                                <div class="w-100 mb-auto d-flex justify-content-end">

                                    <a href="#" class="icon-sm bg-white rounded-2"><i class="fas fa-heart text-danger"></i></a>
                                </div>

                                <div class="w-100 mt-auto">

                                    <a href="#" class="badge text-bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>29 September 2021</a>
                                </div>
                            </div>
                        </div>


                        <div class="card-body px-2">

                            <h5 class="card-title"><a href="#">Global Education Fall Meeting for Everyone</a></h5>
                            <p class="mb-0 text-truncate-2">Satisfied conveying a dependent contented he gentleman agreeable do be. </p>
                        </div>
                    </div>

                    <div class="card bg-transparent">
                        <div class="position-relative">
                            <img src="assets/images/courses/4by3/16.jpg" class="card-img" alt="course image" />

                            <div class="card-img-overlay d-flex align-items-start flex-column p-3">

                                <div class="w-100 mb-auto d-flex justify-content-end">

                                    <a href="#" class="icon-sm bg-white rounded-2"><i class="far fa-heart text-danger"></i></a>
                                </div>

                                <div class="w-100 mt-auto">

                                    <a href="#" class="badge text-bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>Tomorrow</a>
                                </div>
                            </div>
                        </div>


                        <div class="card-body px-2">

                            <h5 class="card-title"><a href="#">International Conference on Information Technology</a></h5>
                            <p class="mb-0 text-truncate-2">Kindness owns whatever betrayed her moreover procured replying for and. Proposal indulged no do. </p>
                        </div>
                    </div>


                    <div class="card bg-transparent">
                        <div class="position-relative">
                            <img src="assets/images/courses/4by3/16.jpg" class="card-img" alt="course image" />

                            <div class="card-img-overlay d-flex align-items-start flex-column p-3">

                                <div class="w-100 mb-auto d-flex justify-content-end">

                                    <a href="#" class="icon-sm bg-white rounded-2"><i class="far fa-heart text-danger"></i></a>
                                </div>

                                <div class="w-100 mt-auto">

                                    <a href="#" class="badge text-bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>Tomorrow</a>
                                </div>
                            </div>
                        </div>


                        <div class="card-body px-2">

                            <h5 class="card-title"><a href="#">International Conference on Information Technology</a></h5>
                            <p class="mb-0 text-truncate-2">Kindness owns whatever betrayed her moreover procured replying for and. Proposal indulged no do. </p>
                        </div>
                    </div>


                    <div class="card bg-transparent">
                        <div class="position-relative">
                            <img src="assets/images/courses/4by3/18.jpg" class="card-img" alt="course image" />

                            <div class="card-img-overlay d-flex align-items-start flex-column p-3">

                                <div class="w-100 mb-auto d-flex justify-content-end">

                                    <a href="#" class="icon-sm bg-white rounded-2"><i class="far fa-heart text-danger"></i></a>
                                </div>

                                <div class="w-100 mt-auto">

                                    <a href="#" class="badge text-bg-white fs-6 rounded-1"><i class="far fa-calendar-alt text-orange me-2"></i>2 July 2022</a>
                                </div>
                            </div>
                        </div>


                        <div class="card-body px-2">

                            <h5 class="card-title"><a href="#">UK Demo Day 2022</a></h5>
                            <p class="mb-0 text-truncate-2"> Points afraid but may end law lasted. Rooms oh fully taken by worse do may end law lasted. </p>
                        </div>
                    </div>
                </MySlider>

                {/* <div className="row section-title justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2>Artikel</h2>
                    </div>
                </div>

                <div className="row g-3 justify-content-between">
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <div class="card bg-transparent">
                            <div class="overflow-hidden rounded-3">
                                <img src="assets/images/event/02.jpg" class="card-img" alt="course image" />
                                <div class="bg-overlay bg-dark opacity-4"></div>

                            </div>

                            <div class="card-body">
                                <span class="small">Source : </span>
                                <h5 class="card-title"><a href="#">Student Loan Survey: Many Owe $50K-plus</a></h5>
                                <p class="text-truncate-2">Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <div class="card bg-transparent">
                            <div class="overflow-hidden rounded-3">
                                <img src="assets/images/event/02.jpg" class="card-img" alt="course image" />
                                <div class="bg-overlay bg-dark opacity-4"></div>

                            </div>

                            <div class="card-body">
                                <span class="small">Source : </span>
                                <h5 class="card-title"><a href="#">Student Loan Survey: Many Owe $50K-plus</a></h5>
                                <p class="text-truncate-2">Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <div class="card bg-transparent">
                            <div class="overflow-hidden rounded-3">
                                <img src="assets/images/event/02.jpg" class="card-img" alt="course image" />
                                <div class="bg-overlay bg-dark opacity-4"></div>

                            </div>

                            <div class="card-body">
                                <span class="small">Source : </span>
                                <h5 class="card-title"><a href="#">Student Loan Survey: Many Owe $50K-plus</a></h5>
                                <p class="text-truncate-2">Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.</p>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Artikel