import React, { Component } from 'react';

export default class ContainerPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        fetch('')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error));
    }
}