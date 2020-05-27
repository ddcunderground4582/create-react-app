import React from 'react';
import './App.css';
import { Switch, Redirect } from 'react-router-dom';
import {MuiThemeProvider } from '@material-ui/core/styles';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import Spinner from './components/UI/Spinner/Spinner';
import LazyRouter from './hoc/LazyRouter/LazyRouter';
import Layout from './hoc/Layout/Layout';
// import * as actions from './store/actions/index';

const RootObject = React.lazy(() => import('./containers/Home/Home'));


const App = props => {
  const useTheme = (props.isDarkTheme) ? darkTheme : lightTheme;
  
  let routes = (
    <Switch>
      <LazyRouter path="/" fallbackObject={ Spinner } routeObject={ RootObject } />
      <Redirect to="/" />
    </Switch>
  );


  return (
    <MuiThemeProvider theme={useTheme}>
      <CssBaseline />
      <Layout>
          {routes}
      </Layout> 
    </MuiThemeProvider>
  );
}

const mapStateToProps = state => {
  return {
      isDarkTheme: state.query.darkTheme
  }
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);