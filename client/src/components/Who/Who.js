import React,{ Component } from 'react';
import './Who.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';


class Who extends Component{
    componentDidMount(){
        
    }

    render(){
        return(
            <div className="who-father">
            <div className="ham">
            <Link to='/'>
            <div className="logo">
                <img className="fav" src='/favicon.ico' ></img>
                <p id="fav-text-black" className="fav-text">Cenergía</p>
                </div>
                </Link>
            <Link to='/menu'>
                <img className="hamburguer-menu" src='/icons/menu-white.svg'></img>
            </Link>
            </div>
            <section className="who">
            <div className="who-title">Quienes <span id="who-title-bold">Somos</span></div>
            <div className="who-text-who">Confiando en Cenergía asesoría eléctrica, no te preocuparas más de ninguno de los problemas que te presenta la factura eléctrica, ya que es nuestro trabajo asegurar que cada necesidad vinculada con la factura eléctrica (cambios de titularidad,  cambios de cuenta, cambios de precio, aplazamientos de pagos….), se resuelva con la mayor comodidad y agilidad para el titular y no pierda tiempo para su negocio.</div>
            <br></br>
            <div className="who-text-who">Trabajar con Cenergía asesoría eléctrica asegura al cliente la confianza y tranquilidad de saber que el análisis de su factura eléctrica está completa, asegurando su optimización en todos los parámetros negociables con las comercializadoras. (Potencia contratada, precio por Kw y reactiva.) </div>
        </section>
        <Footer></Footer>
        </div>
        )
    }
}
export default Who