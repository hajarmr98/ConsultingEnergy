import React,{ Component } from 'react';
import './Form.css'
import Modal from '../Modal/Modal'
import UploadInvoice from '../UploadInvoice/UploadInvoice'
import axios from "axios";


class Form extends Component {
    state = {
      name: undefined,
      email: undefined,
      company: undefined,
      message: undefined,
      modal: false,
      error: false,
      images: undefined
    }
    fetchResult(e){
      e.preventDefault()
      let imagenes;
      if (!this.state.images)
        imagenes = new FormData()
      else
        imagenes = this.state.images
      if (this.state.name)
        imagenes.set("name", this.state.name);
      if (this.state.email)
        imagenes.set("email", this.state.email);
      if (this.state.company)
        imagenes.set("company", this.state.company);
      if (this.state.message)
        imagenes.set("message", this.state.message);
      
      axios
        .post("https://cenergia.herokuapp.com/sendMail", imagenes)
        .then(response => {
              if(response.data.valid === true){
                  this.setState({
                      modal: true,
                  })
              } else {
                  this.setState({
                      error: true
                  })
              }}
        ).catch(error => console.log(error));
    }
    uploadInvoice(body) {
      this.setState({
          ...this.state,
          images: body
      })
  }
    handleModal(){
        this.setState({
            modal: !this.state.modal
        })
    }
    render(){
    return (
        <div id={this.props.form} className="form">
        <main>
            <div className="form-title">CONTACTA CON NOSOTROS</div>
          <form className= "app-form">
          <div className="form-element">
          <label>Nombre</label>
          <input onChange={(e) => this.setState({ name: e.target.value})} type="text"></input>
          </div>
          <div className="form-element">
          <label>Empresa</label>
          <input onChange={(e) => this.setState({ company: e.target.value})} type="text"></input>
          </div>
          <div className="form-element">
          <label>Correo electrónico</label>
          <input onChange={(e) => this.setState({ email: e.target.value})} type="email"></input>
          {this.state.error ? <p className="error-message">Por favor, comprueba que tu email esté escrito correctamente</p> : ''} 
          <div className="form-element">
          <label>Mensaje</label>
          <textarea id="message"onChange={(e) => this.setState({ message: e.target.value})} type="text"></textarea>
          </div>
          </div>
          <div className="form-bottom">
          <UploadInvoice send={this.uploadInvoice.bind(this)}></UploadInvoice>
          <button className="form-button" onClick={(e) => this.fetchResult(e)}>ENVIAR</button>
          </div>
          </form>
        </main>
          {this.state.modal ? <Modal modal={this.handleModal.bind(this)}></Modal> : ''} 
      </div>
    );
  }
}
  
  export default Form;