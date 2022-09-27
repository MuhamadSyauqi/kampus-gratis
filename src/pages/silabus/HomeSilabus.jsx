import React from "react";
import Header4 from "../../component/partials/Header4";
import BannerSilabus from "../../component/silabus/homeSilabus/BannerSilabus";
import CardCategory from "../../component/silabus/homeSilabus/CardCategory";
import CardCourse from "../../component/silabus/homeSilabus/CardCourse";
import Footer3 from "../../component/partials/Footer3";

import { Element } from "react-scroll";

const HomeSilabus = () => {
  return (
    <>
      <Header4 />
      <main>
        <section className="m-0 p-0">
          <BannerSilabus />
        </section>

        <section className="pb-0 py-sm-5">
          <div className="container">
            <h3>Jurusan</h3>
            <div className="row">
              <div className="col-xl-9 col-xxl-8">
                <div className="row g-4">
                  <CardCourse />
                  <CardCourse />
                  <CardCourse />
                  <CardCourse />
                </div>
              </div>
              <div className="col-lg-3 col-xxl-4 pt-5 pt-lg-0">
                <nav className="navbar navbar-light navbar-expand-xl mx-0">
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div className="offcanvas-body p-3 p-xl-0">
                      <CardCategory />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Element name="footer-section1">
        <Footer3 />
      </Element>
    </>
  );
};

export default HomeSilabus;
