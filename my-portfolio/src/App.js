import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about-me' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
