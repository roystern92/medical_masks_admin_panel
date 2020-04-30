import React, { Component } from "react";
import classes from "./Pagination.module.css";
import Button from "./Button/Button";
import Colors from './Button/colors';

class Pagination extends Component {
  state = {
    current: 1,
  };

  /*

    PROPS:
            1. max - The max number of page.
            2. current page.
            3. clicked
*/

  componentDidMount() {
    // console.log("[Pagination] cdm");
  }

  pageClickedHandler = (current) => {
    this.setState({current: current});
    this.props.clicked(current);
  }

  getPagesFromCurrentPageToLastPage = () => {
    const MAX_PAGES_TO_ADD = 6;
    let numberOfPagesFromCurrentToMax = 0;
    // looping from the next page(the page after the current page) until max page
    numberOfPagesFromCurrentToMax =
      this.props.max - (this.state.current + 1) + 1;

    if (numberOfPagesFromCurrentToMax >= MAX_PAGES_TO_ADD)
      numberOfPagesFromCurrentToMax = MAX_PAGES_TO_ADD;
    const res = [];

    for (
      let current = this.state.current + 1;
      current <= this.state.current + numberOfPagesFromCurrentToMax;
      current++
    ) {
      res.push(<Button clicked={() => {
        this.pageClickedHandler(current);
      }} key={current} color={Colors.GREY} label={current} />);
    }

    return res;
  };

  createPagesButtons = () => {
    const previousPage =
      this.state.current > 1 ? <Button clicked={() => {
        this.pageClickedHandler(this.state.current - 1);
      }} color={Colors.ORANGE_AND_BLACK} label=" < Previous" /> : null;
   
      const nextPage =
      this.state.current < this.props.max ? <Button clicked={() => {
        this.pageClickedHandler(this.state.current + 1);
      }} color={Colors.ORANGE_AND_BLACK} label="  Next >" /> : null;
    
      const firstPage = this.state.current === 1 ? <Button  clicked={() => {
      this.pageClickedHandler(1);
    }}   color={Colors.ORANGE} label="1" /> : <Button clicked={() => {
      this.pageClickedHandler(1);
    }}  label="1"/>;
    
    const currentPage =
      this.state.current === 1 ? null : <Button clicked={() => {
        this.pageClickedHandler(this.state.current);
      }} color={Colors.ORANGE} label={this.state.current} />;
    
      const pagesFromCurrentToLastPage = this.getPagesFromCurrentPageToLastPage();
    
      const res = (
      <div className={classes.Pages}>
        {previousPage}
        {firstPage}
        {currentPage}
        {pagesFromCurrentToLastPage}
        {nextPage}
      </div>
    );
    return res;
  };

  render() {
    const pages = this.createPagesButtons();
    return <div className={classes.Pagination}>{pages}</div>;
  }
}

export default Pagination;
