import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Link, Route, BrowserRouter, Switch,
} from 'react-router-dom';
import Bio from './bio';
import Card from './cards';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#b9c9c7',
    border: 'hidden',
    fontSize: 16,
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Bio' component={Link} to='/' />
          <Tab label='Portfolio' component={Link} to='/portfolio' />
          <Tab label='Personal Interests' />
        </Tabs>
      </Paper>
      <Switch>
        <Route exact path='/' component={() => <Bio />} />
        <Route exact path='/portfolio' component={() => <Card />} />
        <Route path='/personal' />
      </Switch>
    </BrowserRouter>
  );
}
