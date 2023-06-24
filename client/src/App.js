import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginReg from './views/LoginReg';
import CreateGame from './views/CreateGame';
import UpdatePlayer from './views/UpdatePlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginReg />} />
          <Route path="/UpdatePlayer" element={<UpdatePlayer />} />
          <Route path="/CreateGame" element={<CreateGame />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
