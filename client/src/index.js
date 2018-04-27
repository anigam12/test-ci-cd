import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import injectTapEventPlugin from "react-tap-event-plugin";
import {Redirect, Route, Router} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./Login/src/features/Login";
import 'semantic-ui-css/semantic.min.css';
import Home from "./App";
import Tasks from './ayush/App';




injectTapEventPlugin();

const customHistory = createBrowserHistory();
const Root = () => (
<div>
        <Router history={customHistory}>
            <div>

                <Route path="/login" component={Login}/>
                <Route path="/app/home" component={Home}/>
                <Route path="/Boards" component={Tasks}/>
                <Redirect from="/" to="/login"/>
            </div>
        </Router>
</div>
);
ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
