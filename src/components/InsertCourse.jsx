import React from 'react'
import Navbar from './Navbar'

const InsertCourse = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <h1 className="text-center">INSERT COURSE</h1>

            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label className="form-label">
                                    Course Name
                                </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">
                                    Duration
                                </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">
                                    Fee
                                </label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">
                                    Mode
                                </label>
                                <select className="form-select">
                                    <option>Select Mode</option>
                                    <option>Online</option>
                                    <option>Offline</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">
                                    Trainer
                                </label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success mt-2">
                                    Submit
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default InsertCourse