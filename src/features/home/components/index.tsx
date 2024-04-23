"use client";

import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { connect, ConnectedProps } from "react-redux";
import { RootState } from "@/types";

import About from "@/features/home/components/about";
import Collection from "@/features/home/components/collections";
import Recipes from "@/features/home/components/recipes";

class Home extends React.Component<HomeTypeProps> {
  render(): React.ReactNode {
    return (
      <Grid container justifyContent="center" mt={2}>
        <Grid item xs={11}>
          <Box mb={2}>
            <About
              aboutUS={this.props.home.about.aboutUS}
              aboutlisting={this.props.home.about.aboutlisting}
            />
          </Box>
        </Grid>
        <Grid item xs={12} bgcolor="#F9F9F9" mt={5}>
          <Grid container justifyContent="center">
            <Grid item xs={11}>
              <Box my={5}>
                <Collection collection={this.props.home.collection} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11}>
          <Box mt={10}>
            <Recipes
              latestRecipes={this.props.home.latestRecipes}
              freshRecipes={this.props.home.freshRecipes}
            />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

const mapState = (state: RootState) => ({
  home: state.home
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type HomeTypeProps = ConnectedProps<typeof connector>;

export default connector(Home);
