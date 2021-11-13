import React, { Component } from 'react';

import { connect } from 'react-redux';    //connects react component to redux store

import MovieCard from './MovieCard';

//Movies container
export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True'
        ? movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
