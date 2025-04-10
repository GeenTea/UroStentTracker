import './style.css'
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

axios.defaults.withCredentials = true;

const Header = () => {
    const [username, setUsername] = useState('user')
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsername = async () => {
            try{
                const response = await axios.post('http://localhost:3000/main-menu');
                if (response.data.status === "success") {
                    setUsername(response.data.user.username);
                } else {
                    console.error("Error fetching username:", response.data.message);
                    navigate('/');
                }
            } catch (error) {
                console.error("Error fetching username:", error);
            }
        }
        fetchUsername();
    }, [navigate])

    const logout=()=>{
        axios.post('http://localhost:3000/logout')
            .then(response => {
                if (response.data.status === "success") {
                    navigate('/');
                } else {
                    console.error("Error logging out:", response.data.message);
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    }

    const hideMenu = () => {
        const menu = document.getElementById('list-menu');
        if (menu.style.visibility === 'hidden') {
            menu.style.visibility = 'visible';
        } else {
            menu.style.visibility = 'hidden';
        }
    }

    return (
        <header>
            <h1>UroStentTracker</h1>
            <div id="exit-menu">
                <p id='users' onClick={hideMenu}>{username}</p>
                <p><Link to={'/'} id="list-menu" onClick={logout}>Exit</Link></p>
            </div>

        </header>
    )
}

export default Header;