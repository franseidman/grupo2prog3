import React, { Component } from 'react';

export default class ContainerPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=744aeafc438e3c43559433a4ec05ce25&language=en-US&page=1')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className = 'container'>
                Hola
            </div>
        )
    }
}