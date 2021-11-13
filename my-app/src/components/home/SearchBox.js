import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

//Form with input text box to search movies

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();                      //this sets loading giff
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Type to Search For Movies
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series, Games .."
              onChange={this.onChange}
            />
            <button type="submit" i class ="fas fa-search fa-2x btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
