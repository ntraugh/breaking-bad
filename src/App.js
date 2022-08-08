import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


const App = () => {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
