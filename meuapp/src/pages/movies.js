import React from 'react';
import axios from 'axios';

const apiMovies = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=f5e33b7872870b499cdef685aff18b48',
});

export default class Movies extends React.Component {
  state = {
    listMovies: [],
    filterList: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const response = await apiMovies.get();
    //console.log(response.data.results);

    const movies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
      };
    });

    this.setState({
      listMovies: movies,
      filterList: movies,
    });
  };

  filtrarFilmes = (event) => {
    const { listMovies } = this.state;

    const filmesFiltradosConvevertido = listMovies.filter((item) => {
      if (item.title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
    });

    this.setState({
      filterList: filmesFiltradosConvevertido,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Filmes</h1>
          <input type="text" onChange={this.filtrarFilmes} />
          {this.state.filterList.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.poster_path} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
