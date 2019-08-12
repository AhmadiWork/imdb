import React from 'react';

class Error extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.code}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Error;