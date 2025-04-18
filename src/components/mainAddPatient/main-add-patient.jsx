import './style.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const mainAddPatient = () => {
    const navigate = useNavigate();

    const handleAddPatient = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post('http://localhost:3000/add-patient', data);
            console.log(response.data);
            navigate('/main-menu');
        } catch (error) {
            console.error("Error adding patient:", error);
        }
    }

    return (
        <>
            <div className="card-add-patient">
                <form className="add-patient-form" onSubmit={handleAddPatient}>
                    <div className="form-group">
                        <label>Number</label>
                        <input type="text" name="number" placeholder="Enter number"/>
                    </div>

                    <div className="form-group">
                        <label>Patient first name</label>
                        <input type="text" name="fname" placeholder="Enter patient name"/>
                    </div>

                    <div className="form-group">
                        <label>Patient last name</label>
                        <input type="text" name="lname" placeholder="Enter patient last name"/>
                    </div>

                    <div className="form-group">
                        <label>Consultant name</label>
                        <input type="text" name="consultant_name" placeholder="Enter consultant name"/>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Stent insertion date</label>
                            <input type="date" name="stent_insertion_date"/>
                        </div>

                        <div className="form-group">
                            <label>Scheduled removal date</label>
                            <input type="date" name="scheduled_removal_date" />
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="cancel-btn" onClick={() => navigate('/main-menu')}>Cancel</button>
                        <button className="add-btn" type={"submit"}>Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default mainAddPatient;