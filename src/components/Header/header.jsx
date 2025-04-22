import './style.css'
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

axios.defaults.withCredentials = true;

const Header = () => {
    const [username, setUsername] = useState('user')
    const [notifications, setNotifications] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsername = async () => {
            try{
                const response = await axios.post('http://localhost:3000/main-menu');
                if (response.data.status === "success") {
                    setUsername(response.data.user.username);
                }
                else {
                    console.error("Error fetching username:", response.data.message);
                    navigate('/');
                }
            } catch (error) {
                console.error("Error fetching username:", error);
                navigate('/');
            }
        }
        const fetchNotifications = async () => {
            try{
                const response = await axios.get('http://localhost:3000/patient');
                const today = new Date().toISOString().split('T')[0];
                const dueToday = response.data.filter(patient => {
                    const scheduledDate = new Date(patient.scheduled_removal_date);
                    return scheduledDate <= new Date(today);
                });
                setNotifications(dueToday.length);

            }catch(error){
                console.error("Error fetching notifications:", error);
            }
        }

        fetchUsername();

        fetchNotifications()
    }, [navigate, username])



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
            <div id="notifications">
                <i className="fas fa-bell fa-2x"></i>
                {notifications > 0 && <span className="notification-count">{notifications}</span>}
            </div>

        </header>
    )
}

export default Header;