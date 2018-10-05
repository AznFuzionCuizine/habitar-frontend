import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Header from './components/Header'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreateHabit from './pages/CreateHabit'
import Contact from './pages/Contact'
import About from './pages/About'

class App extends Component {

    render() {

        const history = createBrowserHistory()
        console.log(history);

        return (
            <div>
                <Router history = { history }>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path = "/" component = { Landing } />
                            <Route path = "/register" component = { Register} />
                            <Route path = "/login" component = {Login} />
                            <Route path = "/dashboard" component = {Dashboard} />
                            <Route path = "/users/:user_id/habits" component = {CreateHabit} />
                            <Route path = "/Contact" component= {Contact} />
                            <Route path = "/About" component= {About} />

                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
