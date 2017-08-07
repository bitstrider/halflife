// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import store from 'core/store';

import RootContainer from 'containers/Root';
import AboutContainer from 'containers/About';
import ThingsContainer from 'containers/Things';
import ThingContainer from 'containers/Thing';

// import ArticlesContainer from 'containers/Articles';
// import ArticleContainer from 'containers/Article';

import 'styles/app.css'


const app = (
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/things">Things</Link></li>
                </ul>

                <Route exact path="/" component={RootContainer}/>
                <Route path="/about" component={AboutContainer}/>
                <Route path="/things" component={ThingsContainer}/>
                <Route path="/things/:thingId" component={ThingContainer}/>
                {/* <Route path="/articles" component={ArticlesContainer}/> */}
                {/* <Route path="/articles/:articleId" component={ArticleContainer}/> */}

            </div>
        </Router>
    </Provider>
);


const element = document.getElementById('app');

ReactDOM.render(app, element)
