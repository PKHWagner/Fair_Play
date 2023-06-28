import React, {useState} from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PlayerNavbar = (props) => {
    const [player, setPlayer] = useState({});
    const id = props.player._id;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
        .then((res)=>{
            console.log(res.data);
            setPlayer(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })}, [])

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-flex mb ps-5 pe-5">
                <div className='col-6 d-flex align-items-center'>
                    <div className='navbar-brand'>
                        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="profile photo" width={200} height={200} />
                    </div>
                    <div className='text-start'>
                        <h4>{player.firstName} {player.lastName}</h4>
                        <h6>{player.address}</h6>
                        <h6>{player.city} {player.state} {player.zipCode}</h6>
                        <h6>{player.sport} - {player.position} - {player.skillLevel === 1 ? 'Beginner' : player.skillLevel === 2 ? 'Intermediate' : player.skillLevel === 3 ? 'Advanced' : 'Pro'}</h6>
                        <Link to={`/UpdatePlayer/${id}`} className='btn btn-secondary'>Edit</Link>
                        <Link to={`/PlayerDashboard`} className='btn btn-secondary ms-3'>Home</Link>
                        <Link to={`/logout`} className='btn btn-secondary ms-3'>Logout</Link>
                    </div>
                </div>
                <div className='col-6'>
                    <h2 className='text-start mb-4'>Player Stats:</h2>
                    <div className='d-flex text-start'>
                        <div className='me-5'>
                            <h5>Minutes played:  {player.minutes}</h5>
                            <h5>Goals:  {player.goals}</h5>
                            <h5>Assists:  {player.assists}</h5>
                        </div>
                        <div className='ms-5'>
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