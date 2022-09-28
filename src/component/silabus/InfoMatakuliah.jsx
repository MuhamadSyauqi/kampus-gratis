import React from 'react'

const InfoMatakuliah = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-9">
                <div className="shadow py-3 text-dark my-5 bg-body rounded px-3 px-md-5">
                    <div className="d-flex justify-content-between fs-5">
                        <p>MataKuliah</p>
                        <p className="text-left">Teknik Ancaman</p>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <p>Jurusan</p>
                        <p className="text-left">Teknik Mesin</p>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <p>Semester</p>
                        <p className="text-left">Genap(IV/Empat)</p>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <p>Bobot </p>
                        <p className="text-left">2 SKS</p>
                    </div>
                    <div className="d-flex justify-content-between fs-5">
                        <p>Dosen Pengampu</p>
                        <p className="text-left">Steve Rogers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoMatakuliah