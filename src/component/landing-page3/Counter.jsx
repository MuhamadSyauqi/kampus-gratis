import React from 'react'
import IconKonten from '../../assets/user/images/counterkg3/movie1.png'
import IconKuis from '../../assets/user/images/counterkg3/movie2.png'
import IconBelajar from '../../assets/user/images/counterkg3/movie3.png'
import IconSertifikat from '../../assets/user/images/counterkg3/movie4.png'
import '../../assets/user/css-custom/landing-page-3.css'

const Counter = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-between mb-5 rows-cols-2 g-md-5 g-3 text-dark">
          <div className="col-md-5">
            <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid icon-wrap konten"
                  src={IconKonten}
                  alt="logo"
                />
              <div className="ms-4">
                <h4 className="">Konten Menarik</h4>
                <p className="mb-0">
                  Video, Web, Presentasi, Dokumen - Tonton di perangkat apa pun!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid icon-wrap kuis"
                  src={IconKuis}
                  alt="logo"
                />
              <div className="ms-4">
                <h4 className="mb-2">Kuis Dan Ulasan</h4>
                <p className="mb-0">
                  Test kemampuan anda & apa pendapat mereka tentang konten
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid icon-wrap belajar"
                  src={IconBelajar}
                  alt="logo"
                />
              <div className="ms-4">
                <h4 className="">Belajar Mudah</h4>
                <p className="mb-0">
                  Pembelajaran yang terstruktur membuat belajar menjadi mudah dan cepat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid icon-wrap sertifikat"
                  src={IconSertifikat}
                  alt="logo"
                />
              <div className="ms-4">
                <h4 className="mb-2">Sertifikat</h4>
                <p className="mb-0">
                  Setelah selesai akan mendapatkan sertifikat yang menunjukkan pencapaian anda.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-around">
          <div className="col-md-5 mb-3">
            <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid icon-wrap belajar"
                  src={IconBelajar}
                  alt="logo"
                />
              <div className="ms-4">
                <h4 className="">Belajar Mudah</h4>
                <p className="mb-0">
                  Pembelajaran yang terstruktur membuat belajar menjadi mudah dan cepat
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-3">
            <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid icon-wrap sertifikat"
                  src={IconSertifikat}
                  alt="logo"
                />
              <div className="ms-4 text-primary">
                <h4 className="mb-2">Sertifikat</h4>
                <p className="mb-0">
                  Setelah selesai akan mendapatkan sertifikat yang menunjukkan pencapaian anda.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Counter