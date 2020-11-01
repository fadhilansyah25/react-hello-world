import ActionType from "./globalActionType";

// initial state default
const globalState = {
    totalOrder: 0
  }
  
  // Reducer
  const rootReducer = (state = globalState, action) => {
    switch (action.type) {
      case ActionType.PLUS_ORDER:
        if (state.totalOrder < 50) {
          return {
            ...state,
            totalOrder: state.totalOrder + 1
          }
        }else{
            return state;
        };
      case ActionType.MINUS_ORDER:
        if (state.totalOrder > 0) {
          return {
            ...state,
            totalOrder: state.totalOrder - 1
          }
        }else{
            return state;
        };
      case ActionType.INPUT_CHANGE:
        return {
          ...state,
          totalOrder: action.value
        }
      default:
        return state;
    }
}

export default rootReducer;