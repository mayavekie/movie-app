import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        data: {},
        loading: false,
        error: false
      }
    };
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      movie: {
        ...this.state.movie,
        loading: true,
        error: false
      }
    });
    axios
      .get(
        "https://www.omdbapi.com/?apikey=2e3b4604&plot=full&i=" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          ...this.state,
          movie: {
            data: { ...response.data },
            loading: false,
            error: false
          }
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <>
        {this.state.movie.loading && <p>Loading movie...</p>}
        {Object.keys(this.state.movie.data).length > 1 && (
          <>
            <h1>{this.state.movie.data.Title}</h1>
            <p>{this.state.movie.data.Plot}</p>
            <p>rating: {this.state.movie.data.imdbRating}</p>
          </>
        )}
        <Link to="/">Search again</Link>
      </>
    );
  }
}
