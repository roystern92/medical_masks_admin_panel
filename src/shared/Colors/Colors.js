 const colors = {
    LIGHTGREY: 'light grey',
    DARKGREY: 'dark grey',
    WHITE : 'white',
    RED : 'red',
    GREEN : 'green',
    BLUE : 'blue',
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
      case colors.RED:
        buttonClasses = classes.Red;
        break;
      case colors.GREEN:
        buttonClasses = classes.Green;
        break;
      case colors.BLUE:
        buttonClasses = classes.Blue;
        break;
      case colors.PURPLE:
        buttonClasses = classes.Purple;
        break;
      default:
        buttonClasses = classes.Black;
        break;
    }

    return buttonClasses;
  }
  
  export default colors;
