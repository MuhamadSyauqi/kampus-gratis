import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="navbar-light navbar-sticky">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand me-0" to="/">
                        <img
                            className="light-mode-item navbar-brand-item"
                            src="assets/images/kgLogo.png"
                            alt="Kampus Gratis"
                        />
                        <img
                            className="dark-mode-item navbar-brand-item"
                            src="assets/images/kgLogo.png"
                            alt="Kampus Gratis"
                        />
                    </Link>
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" //Jangan dihapus
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-animation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav navbar-nav-scroll mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Beranda
                                </Link>
                            </li>
                            <li className="nav-item" style={{ marginRight: "85px" }}>
                                <Link className="nav-link" to="/kategori">
                                    Kategori
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-nav ms-2">
                        <Link className="btn btn-sm btn-dark mb-0" to="/login">
                            <i className="bi bi-power me-2"></i>Masuk
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header