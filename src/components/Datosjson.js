import React, { Component } from 'react';


class DatosJson extends Component {

  state = {
    result: [],
    isLoaded: false
  }

  async componentDidMount(){
    const items = await this.getArtist()
    this.setState({
      result: items,
      isLoaded: true
    })
  }

  getArtist = async () => {
    const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=[YOUR_API_KEY]&format=json';
    const api_call = await fetch(URL)
    const data = await api_call.json()
    const itm = await data.topartists.artist
    const items = itm.map(resp =>({
      id: resp.mbid,
      name: resp.name,
      image: resp.image[3]['#text']
    }))
    return items
  }
  
  render() {
    //console.log(this.state)
    var { result, isLoaded } = this.state
    return (
      <div>
        <h1>Top Artist From Last.fm API </h1>
        {
          !isLoaded? <h3>Cargando Datos...</h3>:
          <div className="cont-img">
              {result.map(resl => (
                <div key={resl.id}>
                <img src={resl.image} alt="artist"></img>
                <h3>{resl.name}</h3>
                </div>
              ))};
          </div>
        }
        
      </div>
    );
  }
}

export default DatosJson;
