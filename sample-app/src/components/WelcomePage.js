import React, { Component } from 'react'

class WelcomePage extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.name}!
            </div>
        )
    }
}

export default WelcomePage;
