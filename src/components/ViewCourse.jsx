import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewCourse = () => {
        const [data,changeData]=useState([])
        
        const fetchData =() =>{
            axios.get("https://host-demo-app.onrender.com/api/courses").then(
                (response)=>{
                    changeData(response.data)
                }
            ).catch()
        }
        useEffect( ()=> {
            fetchData()
        },[]
    )
  return (
<div>

            

            <div className="container">

                <h1 className="text-center mt-4">
                    VIEW COURSES
                </h1>

                <div className="row mt-4">

                    <div className="col col-12">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped">

                                <thead className="table-dark">
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Duration</th>
                                        <th>Fee</th>
                                        <th>Mode</th>
                                        <th>Trainer</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        data.map((value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.course_name}</td>
                                                    <td>{value.duration}</td>
                                                    <td>₹{value.fee}</td>
                                                    <td>{value.mode}</td>
                                                    <td>{value.trainer}</td>
                                                    <td>{value.created_at}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
  )
}

export default ViewCourse