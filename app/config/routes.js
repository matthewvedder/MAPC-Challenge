const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const Form = require('../components/Form');
const ThankYou = require('../components/ThankYou');

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Form}/>
    <Route path='/thank-you' component={ThankYou}/>
  </Router>
)

module.exports = routes;

