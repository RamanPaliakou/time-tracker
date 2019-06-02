import constants from "../../_resources/Constants/Constants";

const styles = (theme) => {
  const { unit } = theme.spacing;
  return {
 
    cardsContainer:{
      minWidth: 'inherit',
      border: '1px solid black !important'
    },
    ComponentContainer :{
      minWidth: constants.minAppWidth,
    }
  };
};

export { styles };
