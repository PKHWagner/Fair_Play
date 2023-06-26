import React, {useState, useEffect} from "react";
import axios from "axios";


const GameDayView = ({props}) => {
    const id = props.id;
    const [game, setGame] = useState({});
    const [team1, setTeam1] = useState([]);
    const [team2, setTeam2] = useState([]);
    const gamePlayers = game.players;

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
        setRosters(gamePlayers);
    }

    return (
        <div>
            <div>
                <h1>Game Day</h1>
                <div>
                    <h3>{game.address} {game.street}</h3>
                    <h3>{game.city}, {game.state} {game.zip}</h3>
                </div>
                <div className="d-flex justy-content-around">
                    <h3>SET UP: {game.setUpTime}</h3>
                    <h3>START: {game.startTime}</h3>
                </div>
            </div>
            <div className="d-flex ">
                <div>
                    <h2>Team 1</h2>
                    <table className='table border border-3 border-secondary'>
                        <thead>
                            <tr>
                                <th scope='col' className='text-start '>Name</th>
                                <th scope='col' className='text-start '>Position</th>
                                <th scope='col' className='text-start '>Skill Lavel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            team1.map((player)=>{
                            return(
                                <tr key={player._id}>
                                    <td>{player.firstname} {player.lastName}</td>
                                    <td>{player.position}</td>
                                    <td>{player.skillLevel}</td>
                                </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>Team 2</h2>
                    <table className='table border border-3 border-secondary'>
                        <thead>
                            <tr>
                                <th scope='col' className='text-start '>Name</th>
                                <th scope='col' className='text-start '>Position</th>
                                <th scope='col' className='text-start '>Skill Lavel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            team2.map((player)=>{
                            return(
                                <tr key={player._id}>
                                    <td>{player.firstname} {player.lastName}</td>
                                    <td>{player.position}</td>
                                    <td>{player.skillLevel}</td>
                                </tr>
                                )
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GameDayView;