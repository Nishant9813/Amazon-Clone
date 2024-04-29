import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

export const Header = () => {
    const [state,dispatch] =useStateValue();

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
            <Link to="/login">
            <div className='header-option'>
                <span className='header-optionLineone'>
                    Hello, Guest
                </span>
                <span className='header-optionLinetwo'>
                    Sign in
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
                    {state.basket.length}
                </span>
            </div>
            </Link>
           
        </div>
        
    </div>
  )
}
