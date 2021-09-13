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
            <div className = 'container2'>
                <div className="divgrande">
                <main className = "Tarjeta">
                    <div className="FotoFlex">
                    <img src={this.props.photo} className="movieimg" alt="txt predeterminado"/>
                    </div>
                    <h3 className="Name">{this.props.name}</h3>
                    <p className= "more" onClick={() => this.handleShow()}>{this.state.mensaje}</p>
                    <section class="aditional-info">
                        <p className= {this.state.clase}>{this.props.descripcion}</p>
                        <p className= {this.state.clase}>Rating: {this.props.rating}</p>
                        <p className= {this.state.clase}>Release Date: {this.props.date}</p>
                    </section>
                    
                    <button className="Eliminar" onClick={()=> this.props.removerPelicula(this.props.name)}> Eliminar pelicula</button>
                </main>
                </div>
            </div>
            
        )
    }
}