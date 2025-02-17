import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import InterproximalModule from './modules/Interproximal/InterproximalModule';
import ToothbrushModule from './modules/Toothbrush/ToothbrushModule';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
        <LanguageToggle />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/interproximal" element={<InterproximalModule />} />
        <Route path="/toothbrush" element={<ToothbrushModule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;