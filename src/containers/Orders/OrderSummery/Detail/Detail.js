import React from 'react';
import classes from './Detail.module.css';
import Label from '../../../../components/UI/Label/Label';
import Paragraph from '../../../../components/UI/Paragraph/Paragraph';

/*
        Props:
        1. info : object in the next format:
          label -The property name.
          content : the content of the property.
          color : The color of the content.
 */


const detail = (props) => {
    return (
        <div className={classes.Detail}>
            <Label label={props.info.label}/>
            <Paragraph content={props.info.content} color={props.info.color}/>
        </div>
    )
}
export default detail;