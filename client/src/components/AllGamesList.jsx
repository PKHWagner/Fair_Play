import React, {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'
import './AllGamesList.css';
// import DeleteButton from './DeleteButton'

const AllGamesList = (props) => {
    const [allGames, setAllGames] = useState([])
    const [game, setGame] = useState({})
    const navigate = useNavigate();
        const loggedInPlayer = useSelector((state) => state.auth.player);
        const player = loggedInPlayer.player;

    useEffect(() => {
        axios.get('http://localhost:8000/api/games/allgames')
        .then((res)=>{
            console.log(res.data);
            setAllGames(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })}, [])
        
    const commitHandler = (id) => {
        Promise.all([
        axios.get(`http://localhost:8000/api/games/${id}`),
        axios.patch(`http://localhost:8000/api/games/${id}`, {players: [...game.players, player]})
        ])
        .then((getRes, patchRes) =>{
            console.log(getRes);
            console.log(patchRes);
            setGame(getRes.data);
            navigate('/PlayerDashboard')
        })
        .catch((err)=>{
            console.log(err);
        })
    }


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
        <div className='game-list-container'>
          <table className='game-list-table'>
            <thead>
              <tr>
                <th scope='col' className='text-start'>Location</th>
                <th scope='col' className='text-start'>Date</th>
                <th scope='col' className='text-start'>Times</th>
                <th scope='col' className='text-start'>Players Committed</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allGames.map((game) => {
                return (
                  <tr key={game._id}>
                    <td>{game.addrress} {game.city} {game.state}</td>
                    <td>{game.date}</td>
                    <td>SET UP: {game.setUPTime}, START TIME: {game.startTime}</td>
                    <td>{game.players.length}</td>
                    <td>
                      <div className='game-actions'>
                        <button className='btn btn-secondary' onClick={commitHandler}>Commit</button>
                        <Link className='btn btn-secondary' to={`/games/viewGame/${game._id}`}>Roster</Link>
                        <Link className='btn btn-secondary' to={`/games/editGame/${game._id}`}>Edit</Link>
                        {/* <GigDeleteButton className='btn btn-dark' id={game._id} successCallback={() => deleteGig(game._id)} /> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    };

export default AllGamesList