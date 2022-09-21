import React from 'react';
import Circle2 from '../.././assets/user/images/BackgroundGlass/circle2.png';
import '../../assets/user/css-custom/landing-page-3.css';

const Hero = () => {
    return (
        <section className="hero-section-3">
            {/* <img src={Circle2} alt="" style={{ position: 'absolute', top: '100px', right: '0', filter: 'blur(50px)', transform: 'translate(100px)' }} /> */}
            <div className="circle2"></div>
            <div
                className="bg-content-3 text-white d-flex flex-column align-items-center justify-content-center">
                <h1 className="mb-4 mt-0 font-weight-bold text-center">Pembelajaran
                    <span className="color-green"> Gratis </span> dan
                    <span className="text-warning"> Tepercaya </span>
                    <br />
                    Pertama di
                    <span className="text-danger"> Indonesia </span> </h1>
                <div className="text-center mb-3 mt-2">
                    <a href=" " className="btn btn-custom px-5 text-white mx-1">Coba Sekarang - Gratis</a>
                </div>
                {/* <span className="sub-text-hero">Gratis & Akses Selamanya
                </span> */}
            </div>
        </section>
    )
}

export default Hero