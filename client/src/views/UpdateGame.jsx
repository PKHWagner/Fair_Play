import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import UpdatePlayerForm from '../components/UpdatePlayerForm' 
import GameForm from '../components/GameForm'
// import NavBar from '../components/NavBar'

const UpdateGame = (props) => {
    const [game, setGame] = useState(props);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const{id} = useParams();
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/players/oneGame/${id}`)
        .then((res)=>{
            console.log(res.data.game);
            setGame(res.data.game);
            setLoaded(true);
        })
        .catch((err)=>{
            console.log(err);
        })
        }, [])

    const editGame = game => {
        axios.put(`http://localhost:8000/api/players/editGame/${id}`, 
        game)
        .then(res=>{
            console.log(res);
            navigate(`/`)
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
        {/* <NavBar/> */}
        <h2 className="mx-auto mt-5">Update Player:</h2>
        <div>
        {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
        <GameForm onSubmitProp={editGame} initialDate={game.date} initialAddress={game.address} initialCity={game.city} initialState={game.state}  initialZipCode={game.zipCode} initialSetUpTime={game.setUpTime} initialStartTime={game.startTime}/>
        </div>
    </div>
    )
}   

export default UpdatePlayer