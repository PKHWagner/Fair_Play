import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import GameForm from '../components/GameForm'
import PlayerNavbar from '../components/PlayerNavbar'
import { useSelector } from 'react-redux';

const UpdateGame = (props) => {
    const [game, setGame] = useState(props);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const{id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const loggedInPlayer = useSelector((state) => state.auth.player);


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
        .then((res)=>{
            setGame(res.data);
            setLoaded(true);
        })
        .catch((err)=>{
            console.log(err);
        })
        }, [])

    const editGame = game => {
        axios.patch(`http://localhost:8000/api/games/${id}`, 
        game)
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
        <h2 className="mx-auto mt-5 text-secondary" style={{fontFamily: "impact"}}>Update Game:</h2>
        <div>
        {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
        {
        loaded && <GameForm onSubmitProp={editGame} initialGameDate={game.gameDate} initialAddress={game.address} initialCity={game.city} initialState={game.state}  initialZipCode={game.zipCode} initialSetupTime={game.setupTime} initialKickOffTime={game.kickOffTime}/>
        }
        </div>
    </div>
    )
}   

export default UpdateGame