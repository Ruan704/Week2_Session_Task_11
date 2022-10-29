import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import UpdateScores from "./updateScores";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://finalspaceapi.com/api/v0/character/?limit=5")
      .then((res) => {
        console.log(res.data);
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    // (condition) ? () : ()
    const postList = this.state.post.length ? (this.state.post.map((info => {
      return (
        <React.Fragment key={info.id}>
          <p >UserId: {info.id}</p>
          <p>Name: {info.name}</p>
          <p>Status:{info.status}</p>
          <p>Species: {info.species}</p>
          <p>Gender: {info.gender}</p>
          <br></br>
        </React.Fragment>
      )
    }))) : (<p>
    No posts yet
    </p>)

      return (
        <React.Fragment>
          <UpdateScores />
        {postList} 
        </React.Fragment>
      )
    }
  }
