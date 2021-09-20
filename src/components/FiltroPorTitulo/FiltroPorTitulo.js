import React, { Component } from 'react';
import './FiltroPorTitulo.css';

export default class FiltroPorTitulo extends Component {
    constructor (){
        super();
        this.state = {
            valorInput: ""
        }
    }

    prevenirSubmit(evento){
        console.log("Prevenimos el comportamiento por default del form que es recargar la página");
        evento.preventDefault();
    }

    capturaInput(evento){
        //console.log(evento.target.value);
        this.setState({
            valorInput: evento.target.value 
        },
        () => this.props.filtrarPorTitulo(this.state.valorInput)
        )
    }

    render(){
        return(
            <div className='grid'>
            <form className="Search" onSubmit={(evento)=> this.prevenirSubmit(evento)}>
                {/*<img width= '20' src="images/lupa2.png" alt="lupa" className="name"/>*/}
                {/*<label className="name">Pelicula: </label>*/}
                <input placeholder='    Buscar...' className="inputbusqueda" onChange={(evento)=> this.capturaInput(evento) } type="text"/>
            </form>
                <img width= '20' src="images/icons8-search.svg" alt="icon" className='lupita'/>
             </div>
        )
    }
}