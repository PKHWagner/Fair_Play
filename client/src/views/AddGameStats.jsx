import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import UpdatePlayerForm from '../components/UpdatePlayerForm' 
import StatForm from '../components/StatForm'
import PlayerNavbar from '../components/PlayerNavbar'
import { useSelector } from 'react-redux';


const AddGameStats = (props) => {
    const [player, setPlayer] = useState({});
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const loggedInPlayer = useSelector((state) => state.auth.player);

    const id = loggedInPlayer.player._id;


    console.log(id);

    // const [loaded, setLoaded] = useState(false);

    const editPlayer = player => {
        axios.patch(`http://localhost:8000/api/players/${id}`, 
        player)
        .then(res=>{
            console.log(res);
            navigate(`/PlayerDashboard`)
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            const errorResponse = err.response.data.errors;
            const errorArray = [];
            for (const key of Object.keys(errorResponse)) 
                {errorArray.push(errorResponse[key].message)}
            setErrors(errorArray);
        });
    }

return (
    <div>
        <PlayerNavbar player={loggedInPlayer.player}/>
        <h2 className="mx-auto mt-5">Game Stats:</h2>
        <div>
            {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
            <StatForm onSubmitProp={editPlayer} initialMinutes={player.minutes} initialGoals={player.goals} initialAssists={player.assists} initialYellowCards={player.yellowCards} initialRedCard={player.redCard}/>  
        </div>
    </div>
    )
}   

export default AddGameStats