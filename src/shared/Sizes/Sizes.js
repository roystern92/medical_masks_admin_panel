  const sizes = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE : 'large'
  };

  export const getClassesBySize = (size, classes) => {
    let sizeClass;

    switch (size) {
      case sizes.SMALL:
        sizeClass = classes.Small;
        break;
      case sizes.MEDIUM:
        sizeClass = classes.Medium;
        break;
      default:
        sizeClass = classes.Large;
        break;
    }

    return sizeClass;
  }
  
  export default sizes;


