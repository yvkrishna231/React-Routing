import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Register from './Register';
import NavBar from './NavBar';
import Login from './Login';
import DataBinding from './DataBinding';
import TodoText from './Todotext';
import Error from './Error'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/data' component={DataBinding} />
                    <Route path='/tododata' component={TodoText} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Redirect to='/home' />
                    <Route path='/error' component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;