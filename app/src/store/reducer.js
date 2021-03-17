import {FETCH_JOKE_START, FETCH_JOKE_SUCCESS, FETCH_JOKE_FAILURE} from './actions'

const initialState = {
    isLoading: false,
    joke: {},
    safe: true,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOKE_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCH_JOKE_SUCCESS:
        return {
          ...state,
          joke: action.payload,
          isLoading: false,
          error: ""
        };
      case FETCH_JOKE_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  