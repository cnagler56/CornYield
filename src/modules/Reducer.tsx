import { useDispatch } from "react-redux";

const initialState = {
  index: 0,
};

export const INDEX = "INDEX";

export default (state = initialState, action: { type: any; data: any }) => {
  switch (action.type) {
    case INDEX: {
      return { ...state, index: action.data };
    }
  }
  return state;
};
