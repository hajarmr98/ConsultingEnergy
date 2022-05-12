import React,{ Component } from 'react';
import './Icons.css';



class Icons extends Component{

    render(){
        return(
            <section className="icons">
                <div className="bubble-father">
                <div className="bubble">
                <img className="bubble-icon" src='/icons/business_black.svg'></img>
             </div>
             <p className="bubble-title">Empresas</p>
             </div>
             <div className="bubble-father">
                <div className="bubble">

                <img className="bubble-icon" src='/icons/energia-solar.png'></img>

                </div>
                <p className="bubble-title">Placas solares y baterías</p>
                </div>
                <div className="bubble-father">
                <div className="bubble">

                <img className="bubble-icon" src='/icons/home_black.svg'></img>

                </div>
                <p className="bubble-title">Particulares</p>
                </div>
            </section>

        )
    }
}
export default Icons