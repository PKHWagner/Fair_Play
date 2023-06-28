import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import StatForm from '../components/StatForm'
import PlayerNavbar from '../components/PlayerNavbar'
import { useSelector } from 'react-redux';


const AddGameStats = () => {
    const [player, setPlayer] = useState({});
    const [errors, setErrors] = useState([]);
    const [existingStats, setExistingStats] = useState ({});
    const navigate = useNavigate();
    const loggedInPlayer = useSelector((state) => state.auth.player);
    const id = loggedInPlayer.player._id;

    console.log(player);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
        .then((res)=>{
            console.log(res.data);
            setPlayer(res.data);
            // setExistingStats(res.data.minutes, res.data.goals, res.data.assists, res.data.yellowCards, res.data.redCard);
        })
        .catch((err)=>{
            console.log(err);
        })}, [])

    const editPlayer = (gameStats) => {
            const updatedPlayer = {
                minutes: parseInt(player.minutes) + parseInt(gameStats.minutes),
                goals: parseInt(player.goals) + parseInt(gameStats.goals),
                assists: parseInt(player.assists) + parseInt(gameStats.assists),
                yellowCards: parseInt(player.yellowCards) + parseInt(gameStats.yellowCards),
                redCard: parseInt(player.redCard) + parseInt(gameStats.redCard),
            };
            console.log(updatedPlayer);
        axios.patch(`http://localhost:8000/api/players/${id}`, updatedPlayer) 
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