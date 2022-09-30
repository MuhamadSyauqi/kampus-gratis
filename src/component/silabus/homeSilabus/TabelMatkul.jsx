import React from 'react'

const TabelMatkul = ({ tableName, children }) => {
    return (
        <div className="card-body">
            <h5 className="text-darks mb-3">{tableName}</h5>
            <div className="table-responsive border-0 rounded-3">

                <table className="table table-dark-gray align-middle p-4 mb-0">

                    {children}

                </table>

            </div>
        </div>
    )
}

export default TabelMatkul