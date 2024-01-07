import { Route, Routes } from 'react-router-dom';
import MonacoEditors from './components/MonacoEditors';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="editors/:id" element={<MonacoEditors />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;