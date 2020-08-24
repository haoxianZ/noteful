import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Error extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error){
        return{hasError: true}
    }
    render(){
        if(this.state.hasError){
            return(
                <h3>Could not display Folders</h3>
            )
        }
        return this.props.children
    }
}
Error.propTypes={
    children: PropTypes.object.isRequired
}