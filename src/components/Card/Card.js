import React, { Component } from 'react';
import classes from './Card.module.css';

import Image from '../../components/UI/Image/Image';
import Title from '../../components/UI/Title/Title';


export default class Card extends Component {
    render() {

        let cardClasses = [classes.Card];
        if(this.props.squre){
            cardClasses.push(classes.Squre);
        }else{
            cardClasses.push(classes.Rectangle);
        }

        return (
            <div className={cardClasses.join(' ')}>
                <Image  name={this.props.imageName}/>
                <Title  title={this.props.title}/>
            </div>
        )
    }
}
