import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth, signOut } from '../firebase';

export const Header = () => {
    const [{basket,user},dispatch] =useStateValue();

    const handleAuthentication = () =>{
        if(user){
            signOut(auth);
        }
    }

  return (
    <div className='header'>
        <Link to="/">
        <img className='header-logo' 
            src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
        />
        </Link>

        <div className="header-search">
            <input className='search-input' type='text' />
            {/* logo or icon me se koi ek aayega search ka*/}
                <SearchIcon className="header-searchIcon"/>
        </div>

        <div className="header-nav">
            {/* <Link to="/login"> without applying the !user then it automatically redirect to login page */}
            <Link to={!user && "/login"}>
            <div className='header-option' onClick={handleAuthentication}>
                <span className='header-optionLineone'>
                    Hello, Guest
                </span>
                <span className='header-optionLinetwo'>
                   {/* { user ? user.email: 'sign In' } */}
                   { user ? 'Sign Out': 'Sign In' }
                </span>
            </div>
            </Link>

            <div className='header-option'>
                <span className='header-optionLineone'>
                    Returns
                </span>
                <span className='header-optionLinetwo'>
                    & Orders
                </span>
            </div>

            <div className='header-option'>
                <span className='header-optionLineone'>
                    Your
                </span>
                <span className='header-optionLinetwo'>
                    Prime
                </span>
            </div>
            
            <Link to="/cart">
            <div className='header-optionBasket'>
                <ShoppingCartIcon/>
                <span className='header-optionLinetwo header-basketIcon'>
                    {basket.length}
                </span>
            </div>
            </Link>
           
        </div>
        
    </div>
  )
}
