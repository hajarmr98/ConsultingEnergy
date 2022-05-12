import React,{ Component } from 'react';
import './Asess.css'


class Asess extends Component{

    render(){
        return(
            <section  className="asses">
            <div className="asses-block">
                <div className='asses-free'>
                    <img className='asses-free-icon' src='/icons/ubi.png'></img>
                    <p className='asses-free-data' id={this.props.asses}>Calle del humilladero, 14. 1ª Planta.</p>

                </div>
                <div className='asses-free'>
                    <img className='asses-free-icon-mail' src='/icons/mail.png'></img>
                    <p className='asses-free-data' href="email:info@cenergia.es" id={this.props.asses}>info@cenergia.es</p>
                </div>
                <div className='asses-free'>
                    <img className='asses-free-icon' src='/icons/movil.png'></img>
                    <a className='asses-free-data' href="tel:+34604176720" id={this.props.asses}>604 176 720 / 631 444 431</a>
                </div>
            </div>
        </section>

        )
    }
}
export default Asess
