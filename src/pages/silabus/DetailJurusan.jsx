import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import Matakuliah from '../../component/silabus/Matakuliah'
import Semester from '../../component/silabus/Semester'

const DetailJurusan = () => {
    const data = [
        {
            namaMatakuliah: "Pemodelan Dan Simulasi Peperangan",
            jumlahMahasiswa: 18,
            level: 'basic'
        },
        {
            namaMatakuliah: "Pemodelan Dan Simulasi Gasing",
            jumlahMahasiswa: 7,
            level: 'intermediate'
        },
        {
            namaMatakuliah: "Logika Matematika",
            jumlahMahasiswa: 25,
            level: 'intermediate'
        }
    ];

    return (
        <>
            <Header4 />
            <main>

                <section className="bg-blue mt-5">
                    <div className="container py-4">
                        <div className="row justify-content-lg-between align-items-end">

                            <div className="col-lg-8">
                                <h1 className="text-white">Nama Jurusan</h1>
                                <p className="text-white">Satisfied conveying a dependent contented he gentleman agreeable do be.
                                    Warrant private blushes removed an in equally totally if. Delivered dejection necessary
                                    objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
                            </div>

                            <div class="col-lg-3">
                                <a href="#" class="btn btn-warning mb-3 w-100">Enroll Course</a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow rounded-2 p-0 mt-n5">

                                    <div className="card-header border-bottom px-4 pt-3 pb-0">
                                        <ul className="nav nav-bottom-line py-0" id="course-pills-tab" role="tablist">

                                            <li className="nav-item me-2 me-sm-4" role="presentation">
                                                <button className="nav-link mb-2 mb-md-0" id="course-pills-tab-1"
                                                    data-bs-toggle="pill" data-bs-target="#course-pills-1" type="button"
                                                    role="tab" aria-controls="course-pills-1" aria-selected="true">Course
                                                    Materials</button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body p-sm-4">
                                        <div className="tab-content" id="course-pills-tabContent">

                                            <div className="tab-pane fade show active" id="course-pills-1" role="tabpanel"
                                                aria-labelledby="course-pills-tab-1">


                                                <Semester id={"1"}>
                                                    {data.map((item, id) => (
                                                        <>
                                                            <Matakuliah key={id} data={item} />
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Semester>
                                                {/* <Semester id={"2"} />
                                                <Semester id={"3"} /> */}
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            {/* Modal slide */}
            <div className="modal fade" id="slideModal" tabIndex="-1" aria-labelledby="slideModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="slideModalLabel">Lecture Slides</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <h6 className="lead fw-bold">You can download or view this slide as:</h6>
                            <p>These are the lecture slides from this unit. It would be helpful to take a look at them prior to
                                taking the quiz. </p>

                            <div className="hstack gap-3 flex-wrap">
                                <a href=" " className="btn btn-lg btn-light">
                                    <div className="fs-4"><i className="bi bi-file-earmark-pdf"></i></div>
                                    <span className="fs-6 mb-0">Lecture 5 pdf</span>
                                </a>

                                <a href=" " className="btn btn-lg btn-light">
                                    <div className="fs-4"><i className="bi bi-file-earmark-word"></i></div>
                                    <span className="fs-6 mb-0">Lecture 5 docs</span>
                                </a>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-primary mb-0">Mark as complete</button>
                        </div>
                    </div>
                </div>
            </div>


            <Footer3 />

        </>
    )
}

export default DetailJurusan