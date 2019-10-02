import React, {Component} from 'react'
import MovieDetail from './MovieDetail'
import HashTag from "./HashTag"
import MovieScore from "./MovieScore"

class Contents extends Component {

    render(){
        return(
            <React.Fragment>
            <div className="Content-Main">
                    
                <div className="content-left">
                    <MovieDetail key={this.props.id} movie_title={this.props.movie_title} ></MovieDetail>
                    <MovieScore key={this.props.id} movie_code={this.props.movie_code} movie_title={this.props.movie_title} 
                                sad={this.props.sad} fear={this.props.fear} gratifying={this.props.gratifying} 
                                immersion={this.props.immersion} depress={this.props.depress} lightness={this.props.lightness}></MovieScore>
                </div>
                <div className="content-right">
                    <HashTag></HashTag>
                </div>
                
            </div>
            </React.Fragment>
        )
    }
}

export default Contents

