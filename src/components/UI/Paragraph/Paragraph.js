import React, { Component } from 'react'
import classes from './Paragrapg.module.css'

export default class Paragraph extends Component {
  /*
        Props:
         1. content : the content of the paragraph
    */

    render() {
        return (
            <div className={classes.Paragraph}>
                <p>{this.props.content}</p>
            </div>
        )
    }
}
