import React,{ Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';



class Menu extends Component{

    render(){
        return(
            <section className="menu">
            <img className="exit" onClick={() => this.props.history.goBack()} src='/icons/exit.svg'></img>
            <div className="menu-text">
            <Link to='/'>
            <p className="menu-title">Home</p>
            </Link>
            <Link to='/contacta'>
            <p className="menu-title">Asesoría Gratuíta</p>
            </Link>
            <Link to='/quienes-somos'>
            <p className="menu-title">Quienes Somos</p>
            </Link>
            <Link to='/opiniones'>
            <p className="menu-title">Opiniones de Clientes</p>
            </Link>
            </div>
            </section>

        )
    }
}
export default Menu