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

  createPaymentIcons = () => {
    const paymentsImages = [
      'visa.svg',
      'mastercard2.svg',
      'diners.svg',
      'bit.png',
      'paybox.png'

    ];
    const icons = paymentsImages.map(el  => <Image key={el} name={el}/>);
    const res =  <div className={classes.Payments}>
        {icons}
    </div>

    return res;
  }

  createSubTitles = () => {
    const paymentsIcons =  this.createPaymentIcons();
    const res = (
      <div className={classes.SubTitles}>
        <div className={classes.Info}>
          <div className={classes.SubTitlesInfo}>
            <h1>מארז 100 מסכות פנים</h1>
            <h1 className={classes.PriceInfo}>185 ש"ח</h1>
          </div>

          <div className={classes.SubTitlesInfo}>
            <h3>(מחיר ליחידה: 1.85 ש"ח)</h3>
            <h1 className={classes.SaleInfo}>250 ש"ח</h1>
          </div>

          <div className={classes.SubTitlesInfo}>
            <h1>מארז 200 מסכות פנים</h1>
            <h1 className={classes.PriceInfo}>350 ש"ח</h1>
          </div>

          <div className={classes.SubTitlesInfo}>
            <h3>(מחיר ליחידה: 1.75 ש"ח)</h3>
            <h1 className={classes.SaleInfo}>500 ש"ח</h1>
          </div>
        </div>


        <div className={classes.SubTitlesBottom}>
          <hr className={classes.Line} />
          <h3 className={classes.Delivery}>זמין במלאי - אין הגבלה על כמות!</h3>
          <h1 className={classes.Delivery}>משלוח מהיר עד הבית</h1>
        </div>
        {paymentsIcons}
      </div>
    );
    return res;
  };

  createTilte = () => {
    const title = <h1>מארז מסכות פנים חד-פעמיות </h1>;
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
        {icon}
        <h4>{info}</h4>
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
      "מידה אחידה (ONE SIZE)",
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
          <div className={classes.MiddleTitles}>{this.createSubTitles()}</div>
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
