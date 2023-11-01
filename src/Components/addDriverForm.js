import React, { Component } from 'react';
import axios from 'axios'; // You'll need to install this library

class AddDriverForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      contact: '',
      vehicle: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newDriver = {
      name: this.state.name,
      contact: this.state.contact,
      vehicle: this.state.vehicle,
    };

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to add a new driver
    axios.post('YOUR_API_ENDPOINT', newDriver)
      .then((response) => {
        console.log('Driver added:', response.data);
        // You can add code to handle success (e.g., show a success message)
      })
      .catch((error) => {
        console.error('Error adding driver:', error);
        // You can add code to handle errors (e.g., show an error message)
      });
  }

  render() {
    return (
      <div>
        <h2>Add New Driver</h2>
        <form>
          <label>Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>Contact:
            <input type="text" name="contact" value={this.state.contact} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>Vehicle:
            <input type="text" name="vehicle" value={this.state.vehicle} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit" onSubmit={this.handleSubmit}>Add Driver</button>
        </form>
      </div>
    );
  }
}

export default AddDriverForm;
