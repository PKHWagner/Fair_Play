import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import GameForm from '../components/GameForm' 
// import NavBar from '../components/NavBar'



const CreateGame = (props) => {
    const [allGames, setAllGames] = useState([]);
    const [game, setGame] = useState(props);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const newGame = async (game) => {
        try{
            const res = await axios.post('http://localhost:8000/api/games', game)
                console.log(res);
                setGame(res.data)
                setAllGames([...allGames, res.data]);
                navigate('/AdminDashboard')
            } catch (err) {
                console.log(err)
                const errorResponse = err.response.data.message;
                const errorArray = [];
                for (const key of Object.keys(errorResponse)) 
                    {errorArray.push(errorResponse[key].message)}
                setErrors(errorArray);
            }
        };

return (
    <div>
        {/* <NavBar/> */}
        <h2 className="mx-auto mt-5">Create Pick Up Game:</h2>
        <div>
            {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
            <GameForm onSubmitProp={newGame} initialGameDate="" initialAddress="" initialCity="" initialState=""  initialZipCode="" initialSetupTime="" initialKickOffTime=""/>
        </div>
    </div>
    )
}

export default CreateGame