import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PlayerNavbar from "../components/PlayerNavbar";


const GameDayView = ({props}) => {
    const {id} = useParams();
    const [game, setGame] = useState({});
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const gamePlayers = game.players;
    const loggedInPlayer = useSelector((state) => state.auth.player);
    console.log(gamePlayers);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then(res => {
                setGame(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const setRosters = (players) => {
        let inSkillOrder = players.sort((a,b) => {
            return a.skill - b.skill;
        })
        let team1 = inSkillOrder.filter((e, index) => {
            return index % 2 === 0
        })
        let team2 = inSkillOrder.filter((e, index) => {
            return index % 2 !== 0
        })
        if (team1.length !== team2.length) {
            team2.push(team1.shift())
        }
        setTeam1(team1);
        setTeam2(team2);
    }

    useEffect(() => {  
        if (gamePlayers) {
            setRosters(gamePlayers);
        }
    }, [gamePlayers]);



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

    
    const setupTime = formatTime(game.setupTime);
    const kickOffTime = formatTime(game.kickOffTime);


    return (
        <div>
            <div>
                <PlayerNavbar player={loggedInPlayer.player}/>
                <h1 className="mt-4 mb-3">Game Day</h1>
                <div>
                    <h4 className="mb-3 text-secondary">- {game.address} {game.street} - {game.city}, {game.state} -</h4>
                </div>
                <div className=" col-2 bg-light border border-dark rounded mx-auto p-3">
                    <h3>SET UP TIME:</h3>
                    <h3 className="mb-4">{setupTime}</h3>
                    <h3>START TIME:</h3>
                    <h3>{kickOffTime}</h3>
                </div>
            </div>
            <div className="d-flex justify-content-around">
                <div>
                    <h2 className="mb-3">Team 1</h2>
                    <table className='table border border-3 border-secondary'>
                        <thead>
                            <tr>
                                <th scope='col' className='text-start '>Name</th>
                                <th scope='col' className='text-start '>Position</th>
                                <th scope='col' className='text-start '>Skill Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            team1.map((player)=>{
                            return(
                                <tr key={player._id}>
                                    <td>{player.firstName} {player.lastName}</td>
                                    <td>{player.position}</td>
                                    <td>{player.skillLevel === 1 ? 'Beginner' : player.skillLevel === 2 ? 'Intermediate' : player.skillLevel === 3 ? 'Advanced' : 'Pro'}</td>
                                </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className="mb-3">Team 2</h2>
                    <table className='table border border-3 border-secondary'>
                        <thead>
                            <tr>
                                <th scope='col' className='text-start '>Name</th>
                                <th scope='col' className='text-start '>Position</th>
                                <th scope='col' className='text-start '>Skill Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            team2.map((player)=>{
                            return(
                                <tr key={player._id}>
                                    <td>{player.firstName} {player.lastName}</td>
                                    <td>{player.position}</td>
                                    <td> {player.skillLevel === 1 ? 'Beginner' : player.skillLevel === 2 ? 'Intermediate' : player.skillLevel === 3 ? 'Advanced' : 'Pro'}</td>
                                </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to="/GameStats" className='btn btn-warning'>END GAME</Link>
        </div>
    )
}

export default GameDayView;