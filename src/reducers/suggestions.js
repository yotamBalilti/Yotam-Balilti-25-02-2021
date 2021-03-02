const initialState = {
  isFetching: 0,
  text: "",
  locations: [],
};
const suggestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SUGGESTIONS_REQ":
      return {
        ...state,
        isFetching: state.isFetching + 1,
      };
    case "GET_SUGGESTIONS_RES":
      return {
        ...state,
        isFetching: state.isFetching - 1,
        locations: action.payload,
      };
    case "RESET_SUGGESTIONS":
      return {
        ...state,
        text: "",
        locations: [],
      };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default suggestionsReducer;
