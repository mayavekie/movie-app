import React from "react";

import { Link } from "react-router-dom";

import { slugify } from "../helpers";

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@material-ui/core";

export default ({ movies }) => (
  <>
    <p>resultaat van opzoeking</p>
    <Grid container spacing={3}>
      {movies.map(movie => (
        <Grid item xs={4} md={3} xl={2} key={movie.imdbID}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={movie.Poster}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.Title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.Plot}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`movie/${movie.imdbID}/${slugify(movie.Title)}`}>
                Learn More
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
);
