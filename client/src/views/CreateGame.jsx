import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import GameForm from '../components/GameForm'
import PlayerNavbar from '../components/PlayerNavbar'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const CreateGame = (props) => {
    const [allGames, setAllGames] = useState([]);
    const [game, setGame] = useState({});
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const loggedInPlayer = useSelector((state) => state.auth.player);

    const newGame = async (game) => {
        try {
            const res = await axios.post('http://localhost:8000/api/games', game)
            console.log(res);
            setGame(res.data)
            setAllGames([...allGames, res.data]);
            navigate('/PlayerDashboard')
        } catch (err) {
            console.log(err.response.data.err.errors)
            const errorResponse = err.response.data.err.errors;
            const errorArray = [];
            console.log(errorArray)
            for (const key of Object.keys(errorResponse)) {
                { errorArray.push(errorResponse[key].message) }
                toast.error(errorResponse[key].message)
            }
            setErrors(errorArray);
        }
    }

    return (
        <div>
            <PlayerNavbar player={loggedInPlayer.player} />
            <h2 className="mx-auto mt-5 text-secondary" style={{fontFamily: "impact"}}>Create Pick Up Game:</h2>
            <div>
                <GameForm onSubmitProp={newGame} initialGameDate="" initialAddress="" initialCity="" initialState="" initialZipCode="" initialSetupTime="" initialKickOffTime="" />
            </div>
        </div>
    )
}

export default CreateGame