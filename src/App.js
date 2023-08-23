import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Like from './Pages/Like'
import Review from './Pages/Review';
import Nav from './Components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/like' element={<Like />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
