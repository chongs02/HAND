import React from "react";
import Nav from "./Nav";
import Contents from "./Contents";
import Footer from "./Footer";
import "./Movie.css";

export default class Movie extends React.Component {
  state = {
    movieEmotion: []
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/movie-emotion");
      const emotion = await response.json();
      this.setState({
        movieEmotion: emotion
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="main">
        <Nav />
        {this.state.movieEmotion.map(item => {
          return (
            <Contents
              key={item.id}
              movie_code={item.movie_code}
              movie_title={item.movie_title}
              sad={item.sad}
              fear={item.fear}
              gratifying={item.gratifying}
              immersion={item.immersion}
              depress={item.depress}
              lightness={item.lightness}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}
