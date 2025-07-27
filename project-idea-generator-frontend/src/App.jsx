import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SavedIdeas from './pages/SavedIdeas';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <nav className="p-4 flex gap-6 justify-center bg-gray-100 shadow mb-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/saved">Saved Projects</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<SavedIdeas />} />
      </Routes>
    </Router>
  );
}

export default App;
