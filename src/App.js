import React from 'react';
import './App.scss';
import { Grid } from '@material-ui/core';
import Container from './components/Container';
import Header from './components/Header';

const App = () => {
  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
          <Container />
        </Grid>
      </Grid>
  );
}

export default App;
