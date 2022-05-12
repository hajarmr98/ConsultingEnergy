import react, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render (){
        return(
            <section className="Footer">
                <div className="footer-text">
                <p>Preguntas frecuentes</p>
                <p>Politica de Privacidad y Cookies</p>
                <p>Condiciones de uso</p>
                </div>
            </section>
        )
    }
}

export default Footer;