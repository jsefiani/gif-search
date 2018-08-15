import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from '../components/SearchForm';
import GifList from '../components/GifList';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true,
      totalGifs: 0
    };
  } 

  componentDidMount() {
    // fetch("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
    //   .then(respons => respons.json())
    //   .then(responseData => this.setState({gifs: responseData.data}))
    //   .catch(error => console.log(error))
   this.performSearch();
  }

  performSearch = (query = "cats") => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false,
          totalGifs: response.data.data.length
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
  }

  render() { 
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
              <GifList data={this.state.gifs} />
            )}
        </div>
      </div>
    )
  }
}
