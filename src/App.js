import './App.css';
import { Cart } from './Components/Cart';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
