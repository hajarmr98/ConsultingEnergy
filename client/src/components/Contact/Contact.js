import React,{ Component } from 'react';
import './Contact.css'
import Mapa from '../Map/Map'
import Form from '../Form/Form'
import Asess from '../Asess/Asess'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

class Contact extends Component{

    render(){
        return(
           <div className="contact">
            <div className="ham">
            <Link to='/'>
            <div className="logo">
                <img className="fav" src='/favicon.ico' ></img>
                <p id="fav-text-black" className="fav-text">Cenergía</p>
                </div>
            </Link>
                <Link to='/menu'>
                <img className="hamburguer-menu-black" src='/icons/menu-white.svg'></img>
                <img className="hamburguer-menu-white" src='/icons/menu-white.svg'></img>
                </Link>
            </div>
            {/* <img className="handshake" src='/images/handshake.jpg'></img> */}
            <section className="group" id="group">
            <Asess asses="white"></Asess>
            <Mapa></Mapa>
            </section>
            {/* <img className="hands" src='/images/hands.jpg'></img> */}
            <Form form="form"></Form>
            <section id="footer" className="footer">
                <div className="footer-text-intro">
                <p>Preguntas frecuentes</p>
                <p>Politica de Privacidad y Cookies</p>
                <p>Condiciones de uso</p>
                </div>
            </section>
           </div>
        )
    }
}
export default Contact