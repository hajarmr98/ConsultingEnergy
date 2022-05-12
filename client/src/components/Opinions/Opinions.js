import React,{ Component } from 'react';
import './Opinions.css'
import { Link } from 'react-router-dom';
import Doter from '../Doter/Doter'


class Opinions extends Component{
    state = {
        value: 0,
        opinions: [
            ["Considero imprescindible el trabajo de las comercializadoras, ayudándote a conseguir los precios más bajos del mercado para que tu empresa pueda seguir adelante sin abusos, en este caso, Cenergía, siempre que le he necesitado se ha esmerado y ha encontrado tarifas muy competitivas.", "", "Biniestar Chic SL"], 
            ["Cenergia me presta servicios de consultoria desde hace dos años, aconsejandome sobre la mejor empresa energética que se adapte a mis necesidades, me ha ayudado a bajar los gastos en un 15% y a evaluar los consumo de energia por horas de trabajo. Cenergia no solo vende el servicio de asesoría si no también te acompaña en el año evaluando nuevas opciones para el beneficio de la empresa.", "Miguel D Introno", "Mara Café SL"], 
            ["Muy buen servicio, con excelentes resultados, buena atención y dedicación, lo recomiendo", "", "Restaurante Varletta"], 
            ["me gusta", "juan perez", "Otros"]]
    }
    componentDidUpdate() {
        console.log(this.state.value)
    }

    render(){
        return(
           <section className="opinions">
               <img className="black-line" src="/images/line-black.png" alt="Black line"/>
                <article className="opinions-carrousel">
                    <img className="arrow" onClick={this.state.value !== 0 ? () => this.setState({value: this.state.value - 1}) : console.log("")} src="/icons/_arrow-left.svg" alt="Left Arrow"/>
                        <div>
                            <section className="opinion">
                                <img className="empresa" src="/images/_empresa.png" alt="Empresa" />
                                <article className="opinion-text">
                                    <p>{this.state.opinions[this.state.value][0]}</p>
                                    <p>{this.state.opinions[this.state.value][1]}</p>
                                    <p>{this.state.opinions[this.state.value][2]}</p>
                                </article>
                            </section>
                            <Doter value={this.state.value} />
                        </div>
                    <img className="arrow" onClick={this.state.value !== 3 ? () => this.setState({value: this.state.value + 1}) : console.log("")} src="/icons/_arrow-right.svg" alt="Right Arrow"/>
                </article>
           </section>
        )
    }
}
export default Opinions