import React from 'react'

const Banner = () => {
    return (
        <section className="px-3 px-md-0">
            <div className="container py-4 custom-card rounded-2">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center py-4 text-light">
                        <h2 className="text-light">Yuk Gabung Kampus Gratis!</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a
                        href=""
                        className="btn py-3 px-5 fw-bold fs-5 d-inline btn-custom-light bg-white text-primary"
                    >
                        Registrasi Sekarang
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner