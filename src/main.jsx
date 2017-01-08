import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App from './components/App.jsx'
import CardView from './components/CardView.jsx'
import Write from './components/Write.jsx'
import Modify from './components/Modify.jsx'
import WriteForm from './components/WriteForm.jsx'
import style from 'style!./stylesheets/main.scss'



render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={CardView} />
            <Route path="/write" component={Write}/>
            <Route path="writeForm" component={WriteForm}/>{/* 테스트를 위해 임시로 넣음 */}
            <Route path="Modify/:id" component={Modify}/>
            <Route path="delete/:id" component={Modify}/>
            {/*<Route path="login" component={} />*/}
        </Route>
    </Router>)
    , document.getElementById('App'));
