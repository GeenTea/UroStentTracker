import './style.css';
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Link} from "react-router-dom";

const Mainn = () => {

    const [hostpitalNumber, setHostpitalNumber] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [consultantName, setConsultantName] = useState([]);
    const [insertionDate, setInsertionDate] = useState([]);
    const [removeDate, setRemoveDate] = useState([]);

    const navigate = useNavigate();

   const patientList = [
       {
           patient_id: hostpitalNumber,
           patient_name: firstName + " " + lastName,
           consultant_name: consultantName,
           insertion_date: insertionDate,
           remove_date: removeDate
       }
   ];

    const itemList  = patientList.map(patient =>
        <tr>
            <td>{patient.patient_id}</td>
            <td>{patient.patient_name}</td>
            <td>{patient.consultant_name}</td>
            <td>{patient.insertion_date}</td>
            <td>{patient.remove_date}</td>
        </tr>
    );

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
                                <th>Hospital Number</th>
                                <th>Patient Name</th>
                                <th>Consultant Name</th>
                                <th>Insertion Date</th>
                                <th>Remove Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList}
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    )
}

export default Mainn;