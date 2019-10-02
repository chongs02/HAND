import React, { Component } from 'react';

export class MovieDetail extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.movie_title}</h1>
             

            </div>
        );
    }
}

export default MovieDetail;