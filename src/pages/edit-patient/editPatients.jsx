import Header from "../../components/Header/header.jsx";
import { useNavigate, useParams, useLocation} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const EditPatient = () => {
    const [patient, setPatient] = useState({
        id: '',
        hospital_number: '',
        fname: '',
        lname: '',
        consultant_name: '',
        stent_insertion_date: '',
        scheduled_removal_date: ''
    });
    const location = useLocation();

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (location.state?.patient) {
            setPatient(location.state.patient);
        } else if (id) {
            const fetchPatient = async () => {
                try {
                    const response = await axios.post(`http://localhost:3000/edit-patient/${id}`, {
                        hospital_number: patient.hospital_number, // Not just "number"
                        fname: patient.fname,
                        lname: patient.lname,
                        consultant_name: patient.consultant_name,
                        stent_insertion_date: patient.stent_insertion_date,
                        scheduled_removal_date: patient.scheduled_removal_date
                    });
                    console.log("Fetched patient:", response.data); // Debug log
                    setPatient(response.data);
                } catch (error) {
                    console.error('Error fetching patient:', error);
                }
            };
            fetchPatient();
        }
    }, [id, location.state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const patientId = id || patient.patient_id; // Now checks for patient_id
            if (!patientId) {
                console.error("No patient ID found. Data:", patient);
                return;
            }
            await axios.post(`http://localhost:3000/edit-patient/${patientId}`, patient);
            navigate('/main-menu');
        } catch (error) {
            console.error('Error updating patient:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="card-add-patient">
                <form className="add-patient-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Hospital Number</label>
                        <input
                            type="text"
                            name="hospital_number"
                            value={patient.hospital_number || ''}
                            onChange={handleChange}
                            placeholder="Enter hospital number"
                        />
                    </div>

                    <div className="form-group">
                        <label>Patient first name</label>
                        <input
                            type="text"
                            name="fname"
                            value={patient.fname || ''}
                            onChange={handleChange}
                            placeholder="Enter patient name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Patient last name</label>
                        <input
                            type="text"
                            name="lname"
                            value={patient.lname || ''}
                            onChange={handleChange}
                            placeholder="Enter patient last name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Consultant name</label>
                        <input
                            type="text"
                            name="consultant_name"
                            value={patient.consultant_name || ''}
                            onChange={handleChange}
                            placeholder="Enter consultant name"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Stent insertion date</label>
                            <input
                                type="date"
                                name="stent_insertion_date"
                                value={patient.stent_insertion_date || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Scheduled removal date</label>
                            <input
                                type="date"
                                name="scheduled_removal_date"
                                value={patient.scheduled_removal_date || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="buttons">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate('/main-menu')}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="add-btn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPatient;