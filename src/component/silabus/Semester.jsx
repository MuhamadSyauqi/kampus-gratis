import React from 'react'
import Matakuliah from './Matakuliah'

const Semester = ({ id, children }) => {
    return (
        <div className="accordion accordion-icon accordion-border" id="accordionExample2">
            <div className="accordion-item mb-3 shadow-sm ">
                <h6 className="accordion-header font-base" id="heading-1">
                    <button className="accordion-button fw-bold rounded d-flex"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${id}`} aria-expanded="false"
                        aria-controls={`collapse-${id}`}>
                        Semester {id}
                    </button>
                </h6>

                <div id={`collapse-${id}`} className="accordion-collapse collapse"
                    aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                    <div className="accordion-body mt-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Semester