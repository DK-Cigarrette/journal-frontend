import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App from './components/App.jsx'
import CardView from './components/CardView.jsx'
import style from 'style!./stylesheets/main.scss'



render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={CardView} />
            {/*<Route path="login" component={} />*/}
        </Route>
    </Router>)
    , document.getElementById('App'));
