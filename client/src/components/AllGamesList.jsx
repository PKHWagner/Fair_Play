import React, {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'
import './AllGamesList.css';
// import DeleteButton from './DeleteButton'

const AllGamesList = (props) => {
    const [allGames, setAllGames] = useState([])
    const [game, setGame] = useState({})
    const loggedInPlayer = useSelector((state) => state.auth.player);
    const player = loggedInPlayer.player;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/games')
        .then((res)=>{
            console.log(res.data);
            setAllGames(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })}, [])

    const formatTime = (time) => {
        if (time) {
            const [hours, minutes] = time.split(":");
            const formattedTime = new Date();
            formattedTime.setHours(hours);
            formattedTime.setMinutes(minutes);

            return formattedTime.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            });
        }
        return "";
        };
    
        const formatDate = (date) => {
            if (date) {
                const formattedDate = new Date(date);
                return formattedDate.toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                });
            }
            return "";
        };
    

        
    const commitHandler = async (gameID) => {
        try {
            const res = await axios.get(`http://localhost:8000/api/games/${gameID}`);
            const gameData = res.data;
            const updatedPlayers = gameData.players ? [...gameData.players, player] : [player]
            await axios.patch(`http://localhost:8000/api/games/${gameID}`, { ...gameData, players: updatedPlayers });
            setAllGames((prevGames) => prevGames.map((game) => (game._id === gameID ? { ...game, players: updatedPlayers } : game)) );
        } catch (err) {
            console.log(err);
        }}


    const decommitHandler = async (gameID) => {
        try {
            const res = await axios.get(`http://localhost:8000/api/games/${gameID}`);
            const gameData = res.data;
            const updatedPlayers = gameData.players.filter((player) => player._id !== player._id)
            await axios.patch(`http://localhost:8000/api/games/${gameID}`, { ...gameData, players: updatedPlayers });
            setAllGames((prevGames) => prevGames.map((game) => (game._id === gameID ? { ...game, players: updatedPlayers } : game)) );
        } catch (err) {
            console.log(err);
        }}


    // const deleteGig = (id) => {
    //     axios.delete(`http://localhost:8000/api/games/deletegame/${id}`, {withCredentials: true})
    //     .then((res)=>{
    //         console.log(res);
    //         setAllGames(allGames.filter((gig) => gig._id !== id))
    //         navigate('/PlayerDashboard')
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

return (
    <div className='container'>
        <table className='table border-3 border-secondary'>
            <thead>
                <tr>
                    <th scope='col' className='text-start '>Location</th>
                    <th scope='col' className='text-start '>Date</th>
                    <th scope='col' className='text-start '>Setup Time</th>
                    <th scope='col' className='text-start '>Kickoff Time</th>
                    <th scope='col' className='text-start'>Players Committed</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                allGames.map((game)=>{
                    const setupTime = formatTime(game.setupTime);
                    const kickOffTime = formatTime(game.kickOffTime);
                    const gameDate = formatDate(game.gameDate);
                    console.log(game);
                    console.log(player);
                    // const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    // const dayOfWeek = dayName[new Date(gig.date).getDay()];
                return(
                    <tr key={game._id} className='text-start'>
                        <td>{game.address} {game.city}, {game.state}</td>
                        <td>{gameDate}</td>
                        <td>{setupTime}</td>
                        <td>{kickOffTime}</td>
                        <td>{game.players.length}</td>
                        <td>
                            <div className='action-button'>
                                {game.players.some((playerObj) => playerObj._id === player._id) ? (
                                    <button className='btn' onClick={()=>decommitHandler(game._id)}>Decommit</button>
                                ) : (
                                    <button className='btn' onClick={()=>commitHandler(game._id)}>Commit</button>
                                )}
                                <Link className='btn' to={`/GameDay/${game._id}`}>Roster</Link>
                                <Link className='btn' to={`/updateGame/${game._id}`}>Edit</Link>
                                {/* <GigDeleteButton className='btn btn-dark' id={game._id} successCallback={()=>deleteGig(game._id)}/> */}
                            </div>
                        </td>
                    </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
)}

export default AllGamesList