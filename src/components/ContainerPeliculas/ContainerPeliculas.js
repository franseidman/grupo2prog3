import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';
import FiltroPorTitulo from '../FiltroPorTitulo/FiltroPorTitulo'

export default class ContainerPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            filteredPeliculas: [],
            page: 2
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=744aeafc438e3c43559433a4ec05ce25')
            .then(response => { return response.json() }) //transformamos la respuesta en un objeto json con el que podemos trabajar
            .then(data => {
                console.log(data)

                this.setState({
                    peliculas: data.results, //no va a cambiar
                    filteredPeliculas: data.results //va variando de acuerdo al input
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

    addCards(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=744aeafc438e3c43559433a4ec05ce25&page=${this.state.page}`)
            .then(response => { return response.json() }) //transformamos la respuesta en un objeto json con el que podemos trabajar
            .then(data => {
                let arrayPrevio = this.state.peliculas;
                let arrayActualizado = arrayPrevio.concat(data.results);
                let paginaActualizada = this.state.page + 1;

                this.setState({
                    peliculas: arrayActualizado,
                    filteredPeliculas: arrayActualizado,
                    page: paginaActualizada
                })

            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className = 'container'>
                <FiltroPorTitulo filtrarPorTitulo={(tituloAFiltrar)=>this.filtrarPorTitulo(tituloAFiltrar)} />
                <button onClick={()=>this.addCards()}>Agregar Mas</button>
                {this.state.peliculas === [] ?
                    < h4 > Cargando ... </h4>:
                    this.state.filteredPeliculas.map((pelicula, index) => {
                        return <Pelicula key={index}
                        name={pelicula.title}
                        photo={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                        descripcion={pelicula.overview}
                        rating={pelicula.vote_average}
                        date={pelicula.release_date}
                        //removerPelicula = {(name)=>this.removerPelicula(name)}
                        />
                    })
                }
            </div>
        )
    }
}