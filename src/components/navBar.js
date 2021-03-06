import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  Link, Route, BrowserRouter, Switch,
} from 'react-router-dom';
import Bio from './bio';
import Portfolio from './projectCards';
import Personal from './personal';
// import Login from './login';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 'hidden',
    boxShadow: 'none',
    fontSize: 20,
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
          <Tab label='Personal Interests' component={Link} to='/personal'/>
        </Tabs>
      </Paper>
      <Switch>
        <Route exact path='/' component={() => <Bio />} />
        <Route exact path='/portfolio' component={() => <Portfolio />} />
        <Route exact path='/personal' component={() => <Personal />} />
        {/* <Route exact path='/secretlogin' component={() => <Login />} /> */}
      </Switch>
    </BrowserRouter>
  );
}
