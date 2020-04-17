import React, { Component } from 'react';
// import classes from './Image.module.css';

export default class Image extends Component {
    render() {
        console.log("render image");
        return (
                    <img src={require('../../../assets/images/' + this.props.name)} alt="text"/>
        )
    }
}
