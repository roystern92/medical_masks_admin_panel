const colors = {
    GREY: 'grey',
    ORANGE: 'orange',
    ORANGE_AND_BLACK : 'orange_and_black',
  };

  export const getButtonClassesByColor = (color, classes) => {
    let buttonClasses;

    switch (color) {
      case colors.ORANGE_AND_BLACK:
        buttonClasses = classes.OrangeAndBlack;
        break;
      case colors.ORANGE:
        buttonClasses = classes.Orange;
        break;
      default:
        buttonClasses = classes.Grey;
        break;
    }

    return buttonClasses;
  }
  
  export default colors;
