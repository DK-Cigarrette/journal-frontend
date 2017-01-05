import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App from './components/App.jsx'
import style from 'style!./stylesheets/main.scss'



render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            {/*<Route path="write" component={Main} />*/}
            {/*<Route path="login" component={} />*/}
        </Route>
    </Router>)
    , document.getElementById('App'));
