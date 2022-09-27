import React from 'react'

const Matakuliah = () => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
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
            <p><span className="fw-bold">18</span> Mahasiswa</p>
            <div className="badge bg-primary">Basic</div>
        </div>
    )
}

export default Matakuliah