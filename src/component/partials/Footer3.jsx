import React from 'react'
import Circle2 from '../../assets/user/images/BackgroundGlass/circle2.png'

const Footer3 = () => {
    return (
        <footer>
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5>Join Us</h5>
                        <a href='#' className='nav-link'>Terms & Condition</a>
                        <a href='#' className='nav-link'>Frequently Asked Questions</a >
                        <a href="#" className='nav-link'>Privacy Policy</a>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5>Developers</h5>
                        <a href='#' className='nav-link'>Forum Diskusi</a>
                        <a href='#' className='nav-link'>Tribute</a>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5>Company</h5>
                        <a href='#' className='nav-link'>Tentang Kita</a>
                        <a href='#' className='nav-link'>Events dan Info</a>
                    </div>
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5>Kontak Kami</h5>
                        <a href='#' className='nav-link'>Primary : 0812-1046-8281</a>
                        <a href='#' className='nav-link'>Primary : learning@m-knowsconsulting.com</a>
                        <a href='#' className='nav-link'>Secondary : surabaya@m-knowsconsulting.com</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container py-2">
                <div className="d-flex align-items-center">
                    <img
                        className="light-mode-item h-30px"
                        src="assets/images/KGLogo4.svg"
                        alt="logo"
                    />
                    <p className="ms-3 my-0 ">2022 - www.kampusgratis.id. All Rights Reserved.Made With Love</p>
                </div>
            </div>
            {/* <img src={Circle2} alt="" style={{ position: 'absolute',bottom:'0',right:'-350px',filter:'blur(50px)'}}/> */}
        </footer>
    )
}

export default Footer3