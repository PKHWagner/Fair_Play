import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import CreateGame from './views/CreateGame';
import UpdatePlayer from './views/UpdatePlayer';
import AddGameStats from './views/AddGameStats';
import PlayerDashboard from './views/PlayerDashboard';
import UpdateGame from './views/UpdateGame';
import GameDayView from './views/GameDayView';
import LoginReg from './views/LoginReg';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginReg />} />
          <Route path="/UpdatePlayer/:id" element={<UpdatePlayer />} />
          <Route path="/CreateGame" element={<CreateGame />} />
          <Route path="/UpdateGame/:id" element={<UpdateGame />} />
          <Route path="/GameStats" element={<AddGameStats />} />
          <Route path="/PlayerDashboard" element={<PlayerDashboard />} />
          <Route path="/GameDay/:id" element={<GameDayView/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
