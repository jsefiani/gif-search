import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false;
        }
    }

    componentDidCatch() {
        this.setState({
            hasError: true;
        });
    }

    render() {
        if(this.state.hasError) {
            return (
                <h2>Ooppss... Something went wrong!</h2>
            )
        } 
        return this.props.children;
    }
}