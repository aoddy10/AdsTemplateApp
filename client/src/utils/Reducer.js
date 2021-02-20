export const initialState = {
  template: [],
  defualtTemplate: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "REPLACE_TO_TEMPLATE":
      return {
        ...state,
        template: [action.item],
        defualtTemplate: [action.item],
      };

    case "REMOVE_FROM_TEMPLATE":
      return { ...state, template: [], defualtTemplate: [] };

    case "UPDATE_ELEMENT":
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
