import React, { Component } from 'react';

export default class Pelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className = 'container'>
                <main>
                    <img src="./img/image-default.png" alt=""/>
                    <h3>Título/ Nombre</h3>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere
                        laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta
                        perspiciatis! Sint, laboriosam cum.</p>
                    <section class="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section>
                    <a href="www.google.com">Ver más</a>
                </main>
            </div>
        )
    }
}