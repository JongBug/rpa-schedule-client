import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("http://localhost:8075/bots/active").then(res => {
      console.log(res);
      console.log(res.data);
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li>{person}</li>
        ))}
        <li />
      </ul>
    );
  }
}
