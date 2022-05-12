import React,{ Component } from 'react';
import './Intro.css';
import Mapa from '../Map/Map'
import Form from '../Form/Form'
import Who from '../Who/Who'
import Asess from '../Asess/Asess'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import Icons from '../Icons/Icons'
import Opinions from '../Opinions/Opinions'
import Footer from '../Footer/Footer'

class Intro extends Component{

    render(){
        return(
        <div>
            <section className="intro">
            <Header className="intro-header"></Header>
            
                {/* <img className="intro-bombi" src='/images/environmental-protection-3341942_1920.jpg'></img> */}
                <Link to='/contacta'>
                <div className="intro-free">ASESORÍA GRATUITA</div>
                </Link>
                <section id="who-intro-desk" className="who">
                <div className="who-title-desk">Quienes <span id="who-title-bold">Somos</span></div>
                <div>Confiando en Cenergía asesoría eléctrica, no te preocuparas más de ninguno de los problemas que te presenta la factura eléctrica, ya que es nuestro trabajo asegurar que cada necesidad vinculada con la factura eléctrica (cambios de titularidad,  cambios de cuenta, cambios de precio, aplazamientos de pagos….), se resuelva con la mayor comodidad y agilidad para el titular y no pierda tiempo para su negocio.
                </div>
            </section>
            </section>
            <section id="who-intro" className="who">
                <div className="who-title">Quienes <span id="who-title-bold">Somos</span></div>
                <div className="who-text">Confiando en Cenergía asesoría eléctrica, no te preocuparas más de ninguno de los problemas que te presenta la factura eléctrica, ya que es nuestro trabajo asegurar que cada necesidad vinculada con la factura eléctrica (cambios de titularidad,  cambios de cuenta, cambios de precio, aplazamientos de pagos….), se resuelva con la mayor comodidad y agilidad para el titular y no pierda tiempo para su negocio.
            </div>
            </section>
            <img className="who-line" src='/images/crema-fluido.png'></img>
            <Icons></Icons>
            {/* <Who></Who> */}
            <Opinions></Opinions>
            <h2>ASESORÍA GRATUÍTA</h2>
            <section className="group">
                <Asess></Asess>
                <Mapa></Mapa>
            </section>
            <Form></Form>
            <section className="footer">
                <div className="footer-text-intro">
                <p>Preguntas frecuentes</p>
                <p>Politica de Privacidad y Cookies</p>
                <p>Condiciones de uso</p>
                </div>
            </section>
            {/* <Contact></Contact> */}
        </div>

        )
    }
}
export default Intro