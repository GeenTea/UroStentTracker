import {redirect, Router, useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';
import './style.css';
import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Добавляем хук для навигации

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', {
                username,
                password
            });

            // Проверяем успешность запроса
            if (response.data.status === "success") {
                navigate('/main-menu');
            } else {
                console.log(response.data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert(error.response?.data?.message || "Login error occurred");
        }
    }

    return(
        <>
            <center>
                <h1>UroStentTracker</h1>
                <div id="login-form">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <input type="text" placeholder="Username" name="username" id="username" onChange={e => setUsername(e.target.value)}/><br/>
                        <input type="password" placeholder="Password" name="password" id="password" onChange={e => setPassword(e.target.value)}/><br/>
                        <button type="submit" name="submit" id="submit">Login</button>
                    </form>
                </div>
            </center>
        </>
    )
}

export default Login;