import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../redux/actions/auth';
import {Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signOut();
    }

    render() {
        return (
            <React.Fragment>
                <Helmet><title>خروج</title></Helmet>

                <Redirect to="/"/>
            </React.Fragment>
        );
    }
}

export default connect(null, {signOut})(SignOut);