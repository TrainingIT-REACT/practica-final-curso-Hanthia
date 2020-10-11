import types from '../actions/types';

const initialState = {
  src: '',
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.PLAY_SONG:
      return {
        ...state,
        src: action.src,
      };
    default:
      return state;
  }
}

export default reducer;