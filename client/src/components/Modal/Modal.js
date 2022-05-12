import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component{
    state={
    }

    hideModal(){
        this.props.modal()
    }
    componentDidMount(){
        console.log(this.props.modal)
    }
    render(){
        return(
            <section className='foundsome'>
                <article className='foundsome-article'>
                    <article className='foundsome-pcontainer'>
                        <p className='foundsome-p'>Enhorabuena, hemos recibido tus datos. 
                        Pronto recibirás noticias de nuestro equipo. ¡Muchas gracias!</p>
                    </article>
                    <img src="/images/sent.gif" alt='algunos restaurantes' className='foundsome-image' />
                    <button className="form-button" onClick={this.hideModal.bind(this)}>Volver</button>
                </article>
            </section>
        )
    }
}

export default Modal