import React from 'react';
import pocket from './Pocket_Logo_Small.png';
import './App.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display:'block',
    marginLeft: 'auto',
    marginRight:'auto'
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header >
        <img src={pocket} className="App-logo" alt="pocket_logo" />
        <Box m={2}>
          <Button variant="contained" color="secondary" className={classes.root}>Trushita Maurya</Button>
        </Box>
        <div>
        </div>
      </header>
    </div>
  );
}

export default App;
