 const colors = {
    LIGHTGREY: 'light grey',
    DARKGREY: 'dark grey',
    WHITE : 'white',
    PURPLE: 'purple'
  };

  export const getButtonClassesByColor = (color, classes) => {
    let buttonClasses;

    switch (color) {
      case colors.DARKGREY:
        buttonClasses = classes.DarkGrey;
        break;
      case colors.LIGHTGREY:
        buttonClasses = classes.LightGrey;
        break;
      case colors.WHITE:
        buttonClasses = classes.White;
        break;
      default:
        buttonClasses = classes.Purple;
        break;

    }

    return buttonClasses;
  }
  
  export default colors;
