import React from 'react'

const TabelMatkul = ({ children }) => {
    return (
        <div className="card-body">
            <div className="table-responsive border-0 rounded-3">

                <table className="table table-dark-gray align-middle p-4 mb-0">

                    {children}

                </table>

            </div>
        </div>
    )
}

export default TabelMatkul