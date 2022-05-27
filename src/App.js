import { HashRouter, Routes, Route } from 'react-router-dom';
import {Home, About, Projects} from './pages';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/projects" 
            element={<Projects />} 
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
