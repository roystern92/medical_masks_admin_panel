import React, { Component } from 'react';
import classes from './OrderSummery.module.css';
import Detail from './Detail/Detail';
 /*
        Props:
         1. details : Get an array of objects that must be in the next format:
            [{label: , content: , color: }, ...]
 */

class OrderSummery extends Component {

    state = {
        editing: false
    }

    componentDidMount() {
        console.log("[OrderSummery] componentDidMount");
    }
    
    createDetails = () => {
        return this.props.details.map( detail => {
            return <Detail key={detail.id + detail.label} info={detail} />
        })
    }

    render() {
        const details = this.createDetails();
        return (
            <div className={classes.OrderSummery}>
                {details}
            </div>
        )
    }
}

export default OrderSummery;