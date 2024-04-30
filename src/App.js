import React , {useEffect} from 'react'
import './App.css';
import { Cart } from './Components/Cart';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { auth , onAuthStateChanged} from './firebase';
import { useStateValue } from './Components/StateProvider';

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    onAuthStateChanged(auth , (authUser)=>{
      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  },[])


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HeaderWithHome />} />
          <Route path='/cart' element={<HeaderWithCart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

function HeaderWithHome() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function HeaderWithCart() {
  return (
    <>
      <Header />
      <Cart />
    </>
  );
}

export default App;
