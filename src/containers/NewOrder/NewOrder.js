import React, { Component } from "react";
import classes from "./NewOrder.module.css";
import axios from "axios";
import Image from "../../components/UI/Image/Image";

class NewOrder extends Component {
  state = {
    loading: false,
  };

  createTilte = () => {
    let spanMessage = <span>50</span>;
    const title = <h1>מארז {spanMessage} מסכות חד-פעמיות</h1>;
    const res = (
      <div className={classes.Title}>
        {title} <hr />
      </div>
    );
    return res;
  };

  createInfo = (info) => {
    const icon = <Image name="bullet.png" />;
    const res = (
      <div className={classes.Info}>
        <h4>{info}</h4>
        {icon}
      </div>
    );
    return res;
  };

  createBody = () => {
    const details = [
      "3 שכבות הגנה-רמת סינון גבוהה",
      "גומי נמתח המתלבש על האוזניים",
      "מידה אחידה ",
      "תו תקן אירופאי ",
    ];
    const maskPicture = (
      <div className={classes.Mask}>
        {" "}
        <Image name="mask.png" />{" "}
      </div>
    );
    const detailsOfTheMask = details.map((detail) => {
      return this.createInfo(detail);
    });
    const infoAboutTheMasks = (
      <div className={classes.MasksInfo}>{detailsOfTheMask}</div>
    );
    const body = (
      <div className={classes.Body}>
        {maskPicture}
        {infoAboutTheMasks}
      </div>
    );
    return body;
  };

  createPriceInfo = () => {
    const res = (
      <div className={classes.PriceInfo}>
        <h1 className={classes.InfoTitle+ " " + classes.InfoTitlehWithMargin}>מחיר 150 ש"ח</h1>
        <h1 className={classes.InfoTitle+ " " + classes.InfoTitlehWithMargin}>מבצע 110 ש"ח</h1>
        <h3 className={classes.InfoSubTitle+ " " + classes.InfoSubTitlehWithMargin}>משלוח וזמני אספקה</h3>
        <p className={classes.InfoParagraph+ " " + classes.InfoParagraphWithMargin}>עלות משלוח משתנה בהתאם ליעד ההזמנה</p>
        <p className={classes.InfoParagraph+ " " + classes.InfoSubParagraphWithMargin}>משלוח מהיר עד הבית</p>
        <hr className={classes.Line}/>
        <h5 className={classes.InfoParagraph+ " " + classes.InfoParagraphSupply}>!זמין במלאי - אין הזמנה על כמות</h5>
        <hr className={classes.Line}/>

      </div>
    );
    return res;
  };


  createBottom = () => {
    const info = this.createPriceInfo();
    return info;
  };

  render() {
    const title = this.createTilte();
    const pageBody = this.createBody();
    const bottom = this.createBottom();
    return (
      <div className={classes.NewOrder}>
        {title}
        {pageBody}
        {bottom}
      </div>
    );
  }
}

export default NewOrder;
