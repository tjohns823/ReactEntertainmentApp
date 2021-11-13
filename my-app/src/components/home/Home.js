import React, { Component } from 'react';
import { connect } from 'react-redux';    //connects React components to Redux Store
import SearchBox from './SearchBox';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

export class Home extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchBox />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Home);
