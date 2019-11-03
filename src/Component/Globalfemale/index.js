import React from 'react';
import axios from 'axios';

// global_male global_female seoul_male seoul_female

export default class Globalfemale extends React.Component {

  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      'global_female' : this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          global_female:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}