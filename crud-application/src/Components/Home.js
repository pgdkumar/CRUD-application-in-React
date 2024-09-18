import React from 'react'

function Home() {
    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 border p-4">
                    <form>
                        <h2 className="text-center">Register Form</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                name="value"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                name="text"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter DOB"
                                name="text"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Age"
                                name="value"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Qualification"
                                name="value"
                            />
                        </div>

                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                placeholder="Enter Address"
                                name="area"></textarea>
                        </div>
                        <div className="mt-4 text-center">
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home