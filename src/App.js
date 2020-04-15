import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid, Typography, AppBar, Toolbar } from "@material-ui/core";

import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
import Movie from "./components/Movie";

import "./styles.css";

export default class App extends Component {
  state = {
    movies: {
      loading: false,
      error: false,
      data: []
    }
  };

  getMovies = str => {
    this.setState({
      movies: {
        ...this.state.movies,
        loading: true
      }
    });
    axios
      .get("https://www.omdbapi.com/?apikey=2e3b4604&s=" + str)
      .then(results => {
        //console.log(results);
        this.setState({
          movies: {
            ...this.state.movies,
            data: [...results.data.Search],
            loading: false
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3">Find your movie</Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Form getMovies={this.getMovies} />
                {this.state.movies.loading && <Loading />}
                {this.state.movies.data.length !== 0 && (
                  <Results movies={this.state.movies.data} />
                )}
              </>
            )}
          />
          <Route
            path="/movie/:id/:title"
            render={props => <Movie {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}
