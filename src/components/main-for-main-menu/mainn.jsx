import './style.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Mainn = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/patient');

                console.log("Respone:", response.data);
                setPatients(response.data);
            } catch (error) {
                console.error('Full error:', error);
                if (error.response) {
                    console.error('Server responded with:', error.response.status);
                }
            }
        };

        fetchData();
    }, []); // пустой массив зависимостей - запрос выполнится только при монтировании

    return(
        <div>
            <main>
                <div id="add_btn">
                    <button onClick={() => navigate("/add-patient")}>
                        <p>Add</p>
                    </button>
                </div>

                <div id="search-bar">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 w-100 p-0">
                                <div className="search-container">
                                    <input type="text" className="form-control search-input" placeholder="Search..."/>
                                    <i className="fas fa-search search-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="table">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th className="th-center">Hospital Number</th>
                            <th className="th-center">Patient Name</th>
                            <th className="th-center">Consultant Name</th>
                            <th className="th-center">Insertion Date</th>
                            <th className="th-center">Remove Date</th>
                            <th colSpan="2" className="th-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {patients.map(patient => (
                            <tr key={patient.hospital_number}>
                                <td>{patient.hospital_number}</td>
                                <td>{patient.fname} {patient.lname}</td>
                                <td>{patient.consultant_name}</td>
                                <td>{patient.stent_insertion_date}</td>
                                <td>{patient.scheduled_removal_date}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => navigate("/edit-patient", { state: { patient } })}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <buttton className="btn btn-danger">
                                        DELETE
                                    </buttton>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default Mainn;