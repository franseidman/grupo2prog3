import React, { Component } from 'react';
import './Pelicula.css';

export default class Pelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clase: 'hide',
            mensaje: 'ver más'
        }
    }

    handleShow(){
        if (this.state.clase === 'hide'){
            this.setState({
                clase: 'show',
                mensaje: "ver menos"
            })
            } else {
            this.setState({
                clase: 'hide',
                mensaje: "ver mas"
            })   
        }
    }

    render() {
        return (
            <div className = 'container'>
                <main className = "Tarjeta">
                    <img src={this.props.photo} alt="txt predeterminado"/>
                    <h3>{this.props.name}</h3>
                    <p class="description">{this.props.descripcion}</p>
                    <p className= "more" onClick={() => this.handleShow()}>{this.state.mensaje}</p>
                    <section class="aditional-info">
                        <p className= {this.state.clase}>Rating: {this.props.rating}</p>
                        <p className= {this.state.clase}>Release Date: {this.props.date}</p>
                    </section>
                </main>
            </div>
        )
    }
}