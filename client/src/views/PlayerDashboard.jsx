import React from "react";
import PlayerNavbar from "../components/PlayerNavbar";
import { useSelector } from "react-redux";
import AllGamesList from "../components/AllGamesList";

const PlayerDashboard = (props) => {
    const loggedInPlayer = useSelector((state) => state.auth.player);
    return (
        <div>
            <PlayerNavbar player={loggedInPlayer.player}/>
            <div className="p-4">
                <h1>Pick Up Games in Your Area</h1>
                <AllGamesList />
            </div>
        </div>
    );
}

export default PlayerDashboard;