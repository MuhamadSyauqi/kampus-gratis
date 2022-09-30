import React from "react";
import { Link } from "react-router-dom";

const CardCourse = () => {
  return (
    <div className="col-12">
      <div
        className="card shadow overflow-hidden p-2 card-course"
      >
        <div className="row g-0">
          <div className="col-md-5 overflow-hidden">
            <img
              src="assets/images/courses/4by3/06.jpg"
              className="rounded-2"
              alt="Card"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <a href=" " className="badge bg-primary text-white mb-2 mb-sm-0">
                  Nama jurusan
                </a>
                <div>
                  <span className="h6 fw-light me-3">
                    <i className="fas fa-star text-warning me-1"></i>4.5
                  </span>
                  <a href=" " className="text-danger">
                    <i className="fas fa-heart"></i>
                  </a>
                </div>
              </div>

              <h5 className="card-title">
                <Link to="/detail-jurusan">Pengantar UMKM - 000371</Link>
              </h5>
              <p className="text-truncate-2 d-none d-lg-block">
                Satisfied conveying a dependent contented he gentleman agreeable
                do be. dependent contented he
              </p>

              <ul className="list-inline">
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="fa fa-book text-danger me-2"></i>17 Matakuliah
                </li>
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="bi bi-person-circle text-orange me-2"></i>Jumlah
                  Mahasiswa 2000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
