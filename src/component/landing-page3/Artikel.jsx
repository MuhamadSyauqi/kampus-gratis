import React from 'react'

const Artikel = () => {
    return (
        <section>
            <div className="container text-dark">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center py-5">
                        <h2>Artikel</h2>
                    </div>
                </div>

                <div className="row g-3 justify-content-between">
                    <div className="col-md-3">
                        <div class="card bg-secondary" >
                            <img src="https://source.unsplash.com/random/" style={{ height: '250px', objectFit: 'cover' }} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text"><small>Source : </small></p>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card bg-secondary" >
                            <img src="https://source.unsplash.com/random/" style={{ height: '250px', objectFit: 'cover' }} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text"><small>Source : </small></p>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card bg-secondary" >
                            <img src="https://source.unsplash.com/random/" style={{ height: '250px', objectFit: 'cover' }} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card-text"><small>Source : </small></p>
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Artikel