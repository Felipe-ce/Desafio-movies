import React from 'react';
import axios from 'axios';

const apiSeries = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/tv/popular?api_key=f5e33b7872870b499cdef685aff18b48&language=pt-BR',
});
export default class Series extends React.Component {
  state = {
    listSeries: [],
  };

  componentDidMount() {
    this.getSeries();
  }

  getSeries = async () => {
    const responseTv = await apiSeries.get();
    console.log(responseTv.data.results);

    const series = responseTv.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      };
    });

    this.setState({
      listSeries: series,
    });
  };

  render() {
    return (
      <div>
        <h1>Consumindo Api de Series</h1>
        {this.state.listSeries.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <img src={item.poster_path} alt={item.name} />
          </div>
        ))}
      </div>
    );
  }
}
