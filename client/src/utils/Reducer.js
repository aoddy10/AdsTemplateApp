export const initialState = {
  template: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "REPLACE_TO_TEMPLATE":
      return {
        ...state,
        template: [action.item],
      };

    case "REMOVE_FROM_TEMPLATE":
      return { ...state, template: [] };

    default:
      return state;
  }
};

export default reducer;
