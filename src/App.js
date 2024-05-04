import React , {useEffect} from 'react'
import './App.css';
import { Cart } from './Components/Cart';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import {Payment} from './Components/Payment';
import { auth , onAuthStateChanged} from './firebase';
import { useStateValue } from './Components/StateProvider';
//Stripe
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
const promise = loadStripe("pk_test_51PC1vXSE5sOS3vsWlnTq6IcVQ5054OWIw3ipApT7D01Z8bcIZzzCdCC7OwTlfxVu5gir8B7pXXhq6Q0aBZnOrokP00KtsYpUxR");
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
          <Route path='/payment' element={<HeaderWithPayment />} />
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
function HeaderWithPayment() {
  return (
    <>
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
    </>
  );
}

export default App;
