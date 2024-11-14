import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.tsx';
import Reading from './pages/Reading.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <div><h1>Card Game Tarot Reading</h1></div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/reading' element={<Reading />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
