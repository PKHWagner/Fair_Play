import React from "react";
import PlayerNavbar from "../components/PlayerNavbar";
import { useSelector } from "react-redux";
import AllGamesList from "../components/AllGamesList";

const PlayerDashboard = (props) => {
    const loggedInPlayer = useSelector((state) => state.auth.player);
    if (!loggedInPlayer) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <PlayerNavbar player={loggedInPlayer.player}/>
            <div className="p-4">
                <h1 className="mt-4 mb-4 text-secondary" style={{fontFamily: "impact"}}>Pick Up Games in Your Area</h1>
                <AllGamesList />
            </div>
        </div>
    );
}

export default PlayerDashboard;