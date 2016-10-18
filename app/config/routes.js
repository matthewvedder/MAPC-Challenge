const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const Form = require('../components/Form');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Form}/>
  </Router>
)

module.exports = routes;

