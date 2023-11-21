import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SQLEditor from './components/SQLEditor';
import './App.css';

function App() {
  return (
 
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editor" element={<SQLEditor />} />
    </Routes>
  </Router>
    
  );
}

export default App;
