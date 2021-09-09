import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';
import FiltroPorTitulo from '../FiltroPorTitulo/FiltroPorTitulo'

export default class ContainerPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            filteredPeliculas: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=744aeafc438e3c43559433a4ec05ce25')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data)

                this.setState({
                    peliculas: data.results, //no va a cambiar
                    //filteredCharacters: data.results //va variando de acuerdo al input
                })

                console.log(data.results);
            })
            .catch(error => console.log(error));
    }

    filtrarPorTitulo(tituloAFiltrar){
        console.log(tituloAFiltrar);
        const arrayFiltrada = this.state.peliculas.filter(
            pelicula => pelicula.title.toLowerCase().includes(tituloAFiltrar.toLowerCase())
        );
        if(tituloAFiltrar === ""){
            this.setState({
                filteredPeliculas: this.state.peliculas
            })
        } else {
            this.setState({
                filteredPeliculas: arrayFiltrada
            })
        } 
    }

    render() {
        return (
            <div className = 'container'>
                <FiltroPorTitulo filtrarPorTitulo={(tituloAFiltrar)=>this.filtrarPorTitulo(tituloAFiltrar)} />
                {this.state.peliculas === [] ?
                    < h4 > Cargando ... </h4>:
                    this.state.filteredPeliculas.map((pelicula, index) => {
                        return <Pelicula key={index}
                        name={pelicula.title}
                        photo={pelicula.image}
                        //removerPelicula = {(name)=>this.removerPelicula(name)}
                        />
                    })
                }
            </div>
        )
    }
}