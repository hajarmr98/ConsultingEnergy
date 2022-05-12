import React,{ Component } from 'react';
import './Home.css'


class Home extends Component{

    render(){
        return(
            <section className="header">
                <img  className="logo" src='/images/logo.png' ></img>
                <img className="hamburguer-menu" src='/images/hamburguer-menu.svg'></img>
            </section>

        )
    }
}
export default Home