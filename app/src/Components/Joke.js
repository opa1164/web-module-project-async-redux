import { connect } from "react-redux";

const Joke = props => {
    const {joke} = props;

    if(joke.type === "single")
    {
        return(
            <div className = "Joke">
                <p>{joke.joke}</p>
            </div>
        );
    }
    else 
    if(joke.type != null)
    {
        return(
            <div className = "Joke">
                <p>{joke.setup} <br /> <br />{joke.delivery}</p>
            </div>
        );
    }
    else 
    return(<></>)
}

const mapStateToProps = (state) => {
    return {
      joke: state.joke
    }
  }
  
  export default connect(mapStateToProps)(Joke);