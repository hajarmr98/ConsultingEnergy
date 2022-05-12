import React,{ Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


class Header extends Component{

    render(){
        return(
            <section className="header">
                <Link to='/'>
                <div className="logo">
                <img className="fav" src='/favicon.ico' ></img>
                <p className="fav-text">Cenergía</p>
                </div>
                </Link>
                <Link to='/menu'>
                <img className="hamburguer-menu" src='/icons/menu-white.svg'></img>
                </Link>
            </section>

        )
    }
}
export default Header