import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='about-me' element={<About/>} />
          <Route path='portfolio' element={<Portfolio/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
