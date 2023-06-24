import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import UpdatePlayerForm from '../components/UpdatePlayerForm' 
import StatForm from '../components/StatForm'
// import NavBar from '../components/NavBar'

const AddGameStats = (props) => {
    const [player, setPlayer] = useState(props);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const{id} = useParams();
    const [loaded, setLoaded] = useState(false);


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/players/onePlayer/${id}`)
        .then((res)=>{
            console.log(res.data.player);
            setPlayer(res.data.player);
            setLoaded(true);
        })
        .catch((err)=>{
            console.log(err);
        })
        }, [])

    const editPlayer = player => {
        axios.put(`http://localhost:8000/api/players/editPlayer/${id}`, 
        player)
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
        <h2 className="mx-auto mt-5">Game Stats:</h2>
        <div>
            {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
            <StatForm onSubmitProp={editPlayer} initialMinutes={player.minutes} initialGoals={player.goals} initialAssists={player.assists} initialYellowCard={player.yellowCard} initialRedCard={player.redCard}/>  
        </div>
    </div>
    )
}   

export default AddGameStats