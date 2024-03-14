import React from "react";
import UserContext from "../utils/UserContext";

//Class based component
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //creating state in class based components
    this.state = {
      info: {},
    };
  }

  async componentDidMount() {
    /**
     * Best place to make api calls
     * Since it is the last function called after the component is mounted to dom
     *
     * So initially component is loaded with dummy data then
     * componentDidMount is called where we fetch data from backend
     *  then the component is loaded with live data
     */
    const data = await fetch("https://api.github.com/users/Harit2002");
    const json = await data.json();

    this.setState({ info: json });
    console.log("component did mount");

   
  }

  componentDidUpdate() {
    /**
     * Here all the conditions are writter
     * where we decide what to do on every state change
     */
    console.log("component did update");
  }

  componentWillUnmount() {
    /**
     * Here we genrally remove thing that are no more required after the component is removed
     * This method is called just before the component is unmounted
     */
    console.log("component did unmount");

  }

  render() {
    console.log("render");
    const { name, location, avatar_url } = this.state.info;
    return (
      <div className="">
        <img src={avatar_url} height={10} />

        <h2>Name: {name}</h2>
        <h2>Location : {location}</h2>
        <UserContext.Consumer>{({loggedInUser}) => <h2>{loggedInUser}</h2>}</UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
