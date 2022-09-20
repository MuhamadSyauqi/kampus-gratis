import React from 'react'

const Tentang = () => {
    return (
        <section className="px-3 px-md-0">
            <div className="container py-5 custom-card  rounded-3">
                <div className="row justify-content-center">
                    <div className="col-md-9 text-center py-5 text-light">
                        <h1 className="text-light">Tujuan Pendidikan adalah mengganti pikiran kosong dengan pikiran terbuka.</h1>
                        <p className="fw-bolder fs-5" style={{ color:'#35CAFC' }}>Malcolm Forbes</p>
                        <p className="fs-5"><span className="text-warning">KAMPUS GRATIS</span> adalah Manajemen Pembelajaran yang sempurna untuk memungkinkan pembelajaran Komunitas, berbagi pengetahuan, dan menginspirasi orang lain!</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a
                        href=""
                        className="btn d-inline btn-custom-light bg-white text-primary"
                    >
                        Coba di kampus gratis
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Tentang