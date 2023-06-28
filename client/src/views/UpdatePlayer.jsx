import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import UpdatePlayerForm from '../components/UpdatePlayerForm' 
import PlayerNavbar from '../components/PlayerNavbar'
import { useSelector } from 'react-redux';

const UpdatePlayer = (props) => {
    const [player, setPlayer] = useState(props);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const{id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const loggedInPlayer = useSelector((state) => state.auth.player);


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/players/${id}`)
        .then((res)=>{
            setPlayer(res.data);    
            setLoaded(true);
        })
        .catch((err)=>{
            console.log(err);
        })
        }, [])

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
        <h2 className="mx-auto mt-5">Update Player:</h2>
        <div>
        {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
        {
        loaded && <UpdatePlayerForm onSubmitProp={editPlayer} initialFirstName={player.firstName} initialLastName={player.lastName} initialAddress={player.address} initialCity={player.city} initialState={player.state} initialZipCode={player.zipCode} initialSport={player.sport} intialPosition={player.postion} initialSkillLevel={player.skillLevel} initialEmail={player.email}/>
        }
        </div>
    </div>
    )
}   

export default UpdatePlayer