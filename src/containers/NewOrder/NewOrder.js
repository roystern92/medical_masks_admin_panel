import React, { Component } from "react";
import classes from "./NewOrder.module.css";
import Image from "../../components/UI/Image/Image";
import OrderForm from "./OrderForm/OrderForm";


class NewOrder extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    console.log("[NewOrder] cdm");
  }
  

  createSubTitles = () => {
    const res = (
      <div className={classes.SubTitles}>
        <h1 className={classes.Sale}>מחיר 150 ש"ח</h1>
        <h1>מבצע 110 ש"ח</h1>
        <hr className={classes.Line} />
        <h3>!זמין במלאי - אין הגבלה על כמות</h3>
        <h1>משלוח מהיר עד הבית</h1>
        <hr className={classes.LineThin} />
      </div>
    );
    return res;
  };

  createTilte = () => {
    let spanMessage = <span>50</span>;
    const title = <h1>מארז {spanMessage} מסכות חד-פעמיות</h1>;
    const res = (
      <div className={classes.Title}>
        {title}
        <hr className={classes.Line} />
      </div>
    );
    return res;
  };

  createInfo = (info) => {
    const icon = <Image name="bullet.png" />;
    const res = (
      <div key={info + new Date()} className={classes.MaskItemInfo}>
        <h4>{info}</h4>
        {icon}
      </div>
    );
    return res;
  };

  createBody = () => {
    let hebFormat = "שכבות הגנה-רמת סינון גבוהה ";
    hebFormat = " 3 " + hebFormat;

    const details = [
      hebFormat,
      "גומי נמתח המתלבש על האוזניים",
      "מידה אחידה (SIZE ONE)",
      "תו תקן אירופאי (CE)",
    ];
    const maskPicture = (
      <div className={classes.MaskPicture}>
        <Image name="mask.png" />
      </div>
    );
    const detailsOfTheMask = details.map((detail) => {
      return this.createInfo(detail);
    });
    const infoAboutTheMasks = (
      <div className={classes.MaskInfo}>{detailsOfTheMask}</div>
    );

    const form = (
      <div className={classes.OrderForm}>
        <OrderForm />
      </div>
    );
    const body = (
      <div className={classes.Body}>
        <div className={classes.Test}>
          {maskPicture}
          {infoAboutTheMasks}
        </div>
        <div className={classes.Middle}>
          {form}
          <div className={classes.MiddleTitles}>
            {this.createSubTitles()}
            </div>
        </div>
      </div>
    );
    return body;
  };

  render() {
    const title = this.createTilte();
    const pageBody = this.createBody();
    const subTitles = (
      <div className={classes.Bottom}>{this.createSubTitles()}</div>
    );
    const newOrder = (
      <div className={classes.NewOrder}>
        {title}
        {pageBody}
        {subTitles}
      </div>
    );
    return newOrder;
  }

  createSaleInfo = () => {
    const info = this.createPriceInfo();
    return info;
  };
}

export default NewOrder;
