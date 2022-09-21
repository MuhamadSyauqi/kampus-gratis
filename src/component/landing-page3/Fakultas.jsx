import React from "react";

const Fakultas = () => {
  return (
    <section>
      <div className="container">
        <div className="row section-title">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="">
              Fakultas <span className="title-small">Kami</span>
            </h2>
          </div>
        </div>
        <div className="tab-content" id="course-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="course-pills-tabs-1"
            role="tabpanel"
            aria-labelledby="course-pills-tab-1"
          >
            <div className="row g-4">
              <div className="col-sm-6 col-lg-4 col-xl-4">
                <div className="card shadow h-100 ">
                  <img
                    src="assets/images/fakultas/UMKM & Ritel 1.png"
                    className=""
                    alt="course"
                  />


                  <div className="card-body custom-card d-flex flex-column ">
                    <h5 className="card-title fs-4 fw-normal text-center m-auto py-5" style={{ width: '50%' }}>
                      <a href=" " className="text-light ">
                        Fakultas Bisnis & Pembiayaan
                      </a>
                    </h5>

                    <button
                      type="button"
                      className="btn btn-custom-light w-100"
                    >
                      Lihat Jurusan
                    </button>
                  </div>


                </div>
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-4">
                <div className="card shadow h-100">
                  <img
                    src="assets/images/fakultas/UMKM & Ritel 2.png"
                    className="card-img-top"
                    alt="course"
                  />

                  <div className="card-body custom-card d-flex flex-column">
                    <h5 className="card-title fs-4 fw-normal text-center m-auto py-5" style={{ width: '80%' }}>
                      <a href=" " className="text-light ">
                        Fakultas Desain Digital
                      </a>
                    </h5>

                    <button
                      type="button"
                      className="btn btn-custom-light bg-white text-primary w-100"
                    >
                      Lihat Jurusan
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-4 col-xl-4">
                <div className="card shadow h-100">
                  <img
                    src="assets/images/fakultas/UMKM & Ritel 3.png"
                    className="card-img-top"
                    alt="course"
                  />
                  <div className="card-body custom-card d-flex flex-column ">
                    <h5 className="card-title fs-4 fw-normal text-center m-auto py-5" style={{ width:'80%' }}>
                      <a href=" " className="text-light ">
                        Fakultas Teknologi Pendukung Ekonomi Digital
                      </a>
                    </h5>

                    <button
                      type="button"
                      className="btn btn-custom-light bg-white text-primary w-100"
                    >
                      Lihat Jurusan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fakultas;
