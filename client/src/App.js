import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import CreateGame from './views/CreateGame';
import UpdatePlayer from './views/UpdatePlayer';
import AddGameStats from './views/AddGameStats';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginReg />} />
          <Route path="/UpdatePlayer" element={<UpdatePlayer />} />
          <Route path="/CreateGame" element={<CreateGame />} />
          <Route path="/GameStats" element={<AddGameStats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
