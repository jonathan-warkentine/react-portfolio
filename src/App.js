import { HashRouter, Routes, Route } from 'react-router-dom';
import {Home, About, Projects, Contact} from './pages';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="flex-column justify-center align-center min-100-vh">
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
          <Route 
            path="/contact" 
            element={<Contact />} 
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
