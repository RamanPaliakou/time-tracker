import {appConstants} from "../../Constants";

const styles = (theme) => {
  const { unit } = theme.spacing;
  return {
 
    cardsContainer:{
      minWidth: 'inherit',
      border: '1px solid black !important'
    },
    ComponentContainer :{
      minWidth: appConstants.minAppWidth,
    }
  };
};

export { styles };
