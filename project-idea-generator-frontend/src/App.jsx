import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SavedIdeas from './pages/SavedIdeas';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <nav className="bg-[#2D2D2D] text-white py-4 px-8 flex justify-between items-center shadow-md">
        <span className="text-xl font-bold">💡 IdeaLab</span>
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-[#60A5FA] transition cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/saved"
            className="hover:text-[#60A5FA] transition cursor-pointer"
          >
            Saved
          </Link>
        </div>
      </nav>

      <div className="bg-[#F0F4F8] min-h-screen text-[#2E2E2E] px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<SavedIdeas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
