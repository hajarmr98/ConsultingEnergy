import react, {Component} from 'react';
import Footer from '../Footer/Footer';
import './Opinions2.css'
import Header from '../Header/Header'

class Opinions2 extends Component {
    state = {
        opinions: [
            ["Considero imprescindible el trabajo de las comercializadoras, ayudándote a conseguir los precios más bajos del mercado para que tu empresa pueda seguir adelante sin abusos, en este caso, Cenergía, siempre que le he necesitado se ha esmerado y ha encontrado tarifas muy competitivas.", "", "Biniestar Chic SL"], 
            ["Cenergia me presta servicios de consultoria desde hace dos años, aconsejandome sobre la mejor empresa energética que se adapte a mis necesidades, me ha ayudado a bajar los gastos en un 15% y a evaluar los consumo de energia por horas de trabajo. Cenergia no solo vende el servicio de asesoría si no también te acompaña en el año evaluando nuevas opciones para el beneficio de la empresa.", "Miguel D Introno", "Mara Café SL"], 
            ["Muy buen servicio, con excelentes resultados, buena atención y dedicación, lo recomiendo", "", "Restaurante Varletta"], 
            ["me gusta", "juan perez", "Otros"]]
    }
    render (){
        return(
            <section className="Opinions2">
                <Header></Header>
                {/* <h2>Opiniones de Clientes</h2> */}
                {[...Array(4)].map((x, i) => 
                    <section id="opinion-opinions" className="opinion">
                            <img className="empresa" src="/images/_empresa.png" alt="Empresa" />
                            <article className="opinion-text">
                                <p>{this.state.opinions[i][0]}</p>
                                <p>{this.state.opinions[i][1]}</p>
                                <p>{this.state.opinions[i][2]}</p>
                            </article>
                    </section>
                )}
                <section className="footer">
                    <div className="footer-text-intro">
                        <p>Preguntas frecuentes</p>
                        <p>Politica de Privacidad y Cookies</p>
                        <p>Condiciones de uso</p>
                    </div>
                </section>
            </section>
        )
    }
}

export default Opinions2;