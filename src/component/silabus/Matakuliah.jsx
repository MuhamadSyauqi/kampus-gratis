import React from 'react'

const Matakuliah = () => {
    return (
        <div className="row justify-content-between">
            <div className="d-flex align-items-center col-md-7 mb-3 mb-md-0">
                <div className="ms-3">
                    <a href="/detail-matakuliah"
                        className="d-inline-block text-truncate mb-0 h6 fw-normal w-100px w-sm-200px w-md-400px">
                        Pemodelan Dan Simulasi Peperangan</a>
                    <ul className="nav nav-divider small mb-0">
                        <li className="nav-item">Kode MK</li>
                        <li className="nav-item">Jumlah SKS</li>
                        <li className="nav-item">Wajib</li>
                    </ul>
                </div>
            </div>

            <div className="ms-3 ms-md-0 d-flex justify-content-between align-items-center col-md-3">
                <p className="m-0"><span className="fw-bold">18</span> Mahasiswa</p>
                <div className="badge bg-primary">Basic</div>
            </div>


        </div>
    )
}

export default Matakuliah