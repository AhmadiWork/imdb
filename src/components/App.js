import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Error from './static/Error';
import Home from './static/Home';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import SignUp from './auth/SignUp';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/sign-out" component={SignOut}/>
                <Route><Error code="404" description="صفحه مورد نظر یافت نشد"/></Route>
            </Switch>
        );
    }
}

export default App;
