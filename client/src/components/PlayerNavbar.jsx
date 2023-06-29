import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from "react-redux"
import {logout, reset} from '../slices/authSlice'
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
        .then((res)=>{
            console.log(res.data);
            setPlayer(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })}, [])

    const logoutHandler = async () => {
        try {
            await axios.post('http://localhost:8000/api/logout', {}, {withCredentials: true});
            await dispatch(logout());
            dispatch(reset());
            navigate('/');
        } catch (err) {
            console.error('Error logging out', err);
            }
    }

    return (
        <nav className="navbar border border-4 border-secondary rounded">
            <div className="container-fluid d-flex mb ps-5 pe-5">
                <div className='col-6 d-flex align-items-center'>
                    <div className='navbar-brand'>
                        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="profile photo" width={200} height={200} />
                    </div>
                    <div className='text-start text-white border border-3 rounded border-secondary bg-secondary p-3'>
                        <h4>{player.firstName} {player.lastName}</h4>
                        <h5>{player.sport} - {player.position} - {player.skillLevel === 1 ? 'Beginner' : player.skillLevel === 2 ? 'Intermediate' : player.skillLevel === 3 ? 'Advanced' : 'Pro'}</h5>
                        <h6 className='mt-3'>{player.address}</h6>
                        <h6>{player.city}, {player.state} {player.zipCode}</h6>
                        <Link to={`/UpdatePlayer/${id}`} className='btn btn-secondary mt-3'>Edit</Link>
                        {
                        !isHomePage &&
                        <Link to={`/PlayerDashboard`} className='btn btn-secondary ms-3 mt-3'>Home</Link>
                        }
                        <button className='btn btn-secondary ms-3 mt-3' onClick={logoutHandler}>Logout</button>
                    </div>
                </div>
                <div className='text-start text-secondary border border-4 rounded border-secondary p-3' style={{backgroundColor: "gainsboro"}}>
                    <h2 className='text-start mb-4 mt-2'>Player Stats:</h2>
                    <div className='d-flex text-start'>
                        <div className='me-4 mb-2'>
                            <h5>Minutes:  {player.minutes}</h5>
                            <h5>Goals:  {player.goals}</h5>
                            <h5>Assists:  {player.assists}</h5>
                        </div>
                        <div className='ms-3 me-3'>
                            <h5>Yellow Cards:  {player.yellowCards}</h5>
                            <h5>Red Cards:  {player.redCard}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default PlayerNavbar