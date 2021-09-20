import React, { Component } from 'react';
import Pelicula from '../Pelicula/Pelicula';
import FiltroPorTitulo from '../FiltroPorTitulo/FiltroPorTitulo'
import './ContainerPeliculas.css';

export default class ContainerPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            filteredPeliculas: [],
            page: 2,
            clase: 'Tarjeta'
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=744aeafc438e3c43559433a4ec05ce25')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data)

                this.setState({
                    peliculas: data.results,
                    filteredPeliculas: data.results 
                })

                console.log(data.results);
            })
            .catch(error => console.log(error));
    }

    removerPelicula(name){
        console.log(name);
        const peliculasFiltradas = this.state.peliculas.filter(pelicula => pelicula.title !== name)
        console.log(peliculasFiltradas);
        this.setState({
            peliculas: peliculasFiltradas,
            filteredPeliculas: peliculasFiltradas
        })
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
            .then(response => { return response.json() })
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

    CambiarOrientacionALista(){
        if (this.state.clase === 'Tarjeta'){
            this.setState({
                clase: 'lista',
            })
            } else {
            this.setState({
                clase: 'lista',
            })   
        }
    }

    CambiarOrientacionAGrid(){
        if (this.state.clase === 'lista'){
            this.setState({
                clase: 'Tarjeta',
            })
            } else {
            this.setState({
                clase: 'Tarjeta',
            })   
        }
    }



    render() {
        return (
            <div className = 'container22'>
                <FiltroPorTitulo filtrarPorTitulo={(tituloAFiltrar)=>this.filtrarPorTitulo(tituloAFiltrar)} />
                <button className="addcards" onClick={()=>this.addCards()}>Cargar Más</button>
                <div className="BotonesOrientacion">
                <div className="orientacionList" onClick={() => this.CambiarOrientacionALista()}> <img width= '18' src="images/bars-solid.svg" alt="icon" className="icon" /></div>
                <div className="orientacionGrid" onClick={() => this.CambiarOrientacionAGrid()}> <img width= '20' src="images/th-solid.svg" alt="icon" className="icon" /></div>
                </div>
                <div className = 'container'>
                {this.state.peliculas === [] ?
                    < h4 > Cargando ... </h4>:
                    this.state.filteredPeliculas.map((pelicula, index) => {
                        return <Pelicula key={index}
                        name={pelicula.title}
                        photo={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                        descripcion={pelicula.overview}
                        rating={pelicula.vote_average}
                        date={pelicula.release_date}
                        removerPelicula = {(name)=>this.removerPelicula(name)}
                        clase = {this.state.clase}
                        />
                    })
                }
                </div>
            </div>
        )
    }
}