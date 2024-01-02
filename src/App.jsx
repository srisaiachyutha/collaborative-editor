import { Route, Routes } from 'react-router-dom';
import MonacoEditors from './components/MonacoEditors';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/editors/:id" element={<MonacoEditors />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;