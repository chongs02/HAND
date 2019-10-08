import React, { Component } from "react";
import MovieDetail from "./MovieDetail";
import HashTag from "./HashTag";
import MovieScore from "./MovieScore";
import Login from "./Login";
// import { Provider } from "react-redux";
// import { BroserRouter, Switch } from "react-router-dom";

class Contents extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Content-Main">
          <div className="content-left">
            <MovieDetail
              key={this.props.id}
              movie_title={this.props.movie_title}
            />
            <MovieScore
              key={this.props.id}
              movie_code={this.props.movie_code}
              movie_title={this.props.movie_title}
              sad={this.props.sad}
              fear={this.props.fear}
              gratifying={this.props.gratifying}
              immersion={this.props.immersion}
              depress={this.props.depress}
              lightness={this.props.lightness}
            />
          </div>
          <div className="content-right">
            <Login />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contents;
