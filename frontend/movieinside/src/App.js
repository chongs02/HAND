import React from 'react';
import Nav from './components/Nav'
import Contents from "./components/Contents"
import Footer from "./components/Footer"
import "./App.css"

export default class App extends React.Component{
  state = {
    movieEmotion:[]
  }

  async componentDidMount(){
    try{
      const response = await fetch('http://127.0.0.1:8000/api/')
      const emotion = await response.json()
      this.setState({
        movieEmotion: emotion
      })
    } catch(e){
      console.log(e)
    }
  }

  render(){
    return(
    <div className="main">
      <Nav></Nav>
      { this.state.movieEmotion.map((item)=>{

      return <Contents key={item.id} movie_code={item.movie_code} movie_title={item.movie_title} 
      sad={item.sad} fear={item.fear} gratifying={item.gratifying} 
      immersion={item.immersion} depress={item.depress} lightness={item.lightness} ></Contents>

      })}
      <Footer></Footer>
  </div>
  )
  }
}
