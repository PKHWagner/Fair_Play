import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux"
import { logout, reset } from '../slices/authSlice'
import '../styles/PlayerNavbar.css';

const PlayerNavbar = (props) => {
    const [player, setPlayer] = useState({});
    const id = props.player._id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const isHomePage = location.pathname === '/PlayerDashboard';

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then((res) => {
                console.log(res.data);
                setPlayer(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const logoutHandler = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true });
            await dispatch(logout());
            dispatch(reset());
            navigate('/');
        } catch (err) {
            console.error('Error logging out', err);
        }
    }

    return (
        <nav className="navbar">

            <div className='row align-items-center'>

                <div className='col-8'>
                    <h1>{player.firstName} {player.lastName}</h1>
                    <h2>{player.sport} - {player.position} - {player.skillLevel === 1 ? 'Beginner' : player.skillLevel === 2 ? 'Intermediate' : player.skillLevel === 3 ? 'Advanced' : 'Pro'}</h2>
                    <h3 className='mt-3'>{player.address}</h3>
                    <h4>{player.city}, {player.state} {player.zipCode}</h4>
                </div>

                <div className='col-4'>
                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="player avatar" width={200} height={200} />
                    <div className='d-inline-flex'>
                        <Link to={`/UpdatePlayer/${id}`} className='buttonWhite ms-3 mt-3'>Edit</Link>
                        {
                            !isHomePage &&
                            <Link to={`/PlayerDashboard`} className='buttonWhite ms-3 mt-3'>Home</Link>
                        }
                        <button className='buttonWhite ms-3 mt-3' onClick={logoutHandler}>Logout</button>
                    </div>
                </div>

                <div className='hr'>
                    <hr />
                </div>

                <div>
                    <h5 className='text-start mb-4 mt-2'>Player Stats:</h5>
                    <div className='d-flex flex-row justify-content-evenly'>
                        <h6>Minutes:  {player.minutes}</h6>
                        <h6>Goals:  {player.goals}</h6>
                        <h6>Assists:  {player.assists}</h6>
                        <h6>Yellow Cards:  {player.yellowCards}</h6>
                        <h6>Red Cards:  {player.redCard}</h6>
                    </div>
                </div>

            </div>

        </nav >
    )
}

export default PlayerNavbar