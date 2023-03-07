import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/main";
import Monday from './components/pages/monday';
import Tuesday from './components/pages/tuesday';
import Wednesday from './components/pages/wednesday';
import Thursday from './components/pages/thursday';
import Friday from './components/pages/friday';


import './App.css';

function App() {
  return (
    <BrowserRouter>
    <MainLayout />
      <Routes>    
            <Route path="/" index element={<Monday />} />
            <Route path="monday" element={<Monday />} />
            <Route path="tuesday" element={<Tuesday />} />
            <Route path="wednesday" element={<Wednesday />} />
            <Route path="thursday" element={<Thursday />} />
            <Route path="friday" element={<Friday />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
