import axios from "axios";

export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_START = "FETCH_JOKE_START";
export const FETCH_JOKE_FAILURE = "FETCH_JOKE_FAILURE";

export const fetchData = ()=> {
    console.log("test");
  return dispatch => {
      console.log("testing");

    dispatch({ type: FETCH_JOKE_START });
 
        axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then((res) => {
            console.log(res.data)
            dispatch({ type: FETCH_JOKE_SUCCESS, payload: res.data});
        })
        .catch((err) => {
            console.log(err.message);
            dispatch({ type: FETCH_JOKE_FAILURE, payload: err.message });
      });

  };
};