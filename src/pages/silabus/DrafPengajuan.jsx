import React from 'react'
import Footer3 from '../../component/partials/Footer3'
import Header4 from '../../component/partials/Header4'
import BannerSilabus from '../../component/silabus/homeSilabus/BannerSilabus'
import TabelMatkul from '../../component/silabus/homeSilabus/TabelMatkul'

const DrafPengajuan = () => {
    return (
        <>
            <Header4 />
            <main>
                <BannerSilabus />

                <section>
                    <div className="container">
                        <TabelMatkul>
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 rounded-start">No</th>
                                    <th scope="col" className="border-0">Kode Mata kuliah</th>
                                    <th scope="col" className="border-0">Nama Mata kuliah</th>
                                    <th scope="col" className="border-0">Keterangan</th>
                                    <th scope="col" className="border-0 rounded-end"></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>

                                    <td>
                                        1
                                    </td>

                                    <td>IF202</td>

                                    <td>Logika Matematika</td>

                                    <td>Wajib</td>
                                    <td>
                                        <button className="btn btn-sm btn-success-soft btn-round mb-0"><i class="fa fa-check" aria-hidden="true"></i></button>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td>IF203</td>

                                    <td>Pemrograman Dasar</td>

                                    <td>Prasyarat</td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary btn-round mb-0"><i class="fa fa-spinner fa-lg" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </TabelMatkul>
                    </div>
                </section>

            </main>
            <Footer3 />
        </>
    )
}

export default DrafPengajuan