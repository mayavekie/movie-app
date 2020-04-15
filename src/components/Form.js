import React from "react";
import { Button, Input } from "@material-ui/core";

export default class props extends React.Component {
  state = {
    searchStr: {
      value: "",
      error: false
    }
  };
  handleField = e => {
    this.setState({
      searchStr: {
        ...this.state.searchStr,
        value: e.target.value,
        error: false
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchStr.value === "") {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: true
        }
      });
    } else {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: false
        }
      });
      this.props.getMovies(this.state.searchStr.value);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          id="regular"
          inputProps={{
            placeholder: "Search movie"
          }}
          formControlProps={{
            fullWidth: true
          }}
          type="text"
          onChange={this.handleField}
          value={this.state.searchStr.value}
          className={this.state.searchStr.error ? "error" : ""}
        />
        <Button type="button">Search movies</Button>
      </form>
    );
  }
}
