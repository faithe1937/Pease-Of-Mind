import React, { Component } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react'
import axios from 'axios'

// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
//   { key: 'o', text: 'Other', value: 'other' },
// ]

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '',
      password: '',
      password_confirmation: '',
     age: '',
     gender: '',
     height: '',
     weight: '',
     activity: '',
      errors: ''
     };


  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

handleSubmit = (event) => {
    event.preventDefault()
    const {username, password, password_confirmation, age, gender, height, weight, activity} = this.state
    let user = {
      username: username,
      password: password,
      password_confirmation: password_confirmation,
      age: age,
      gender: gender,
      height: height,
      weight: weight,
      activity: activity
    }

  console.log(user)
  
axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
      }

render() {

    const {username, password, password_confirmation, height, gender, weight, age} = this.state 

return (

      <div>
       <Form widths='equal' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input 
            // fluid label='username'
            fluid placeholder='username'
            type='text'
            name='username'
            value={username}
            onChange={this.handleChange}
          />
    
          <Form.Input 
            // fluid label='password'
            fluid placeholder='password'
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />

          <Form.Input
            // fluid label='password'
            fluid placeholder='password confirmation'
            type='password'
            name='password_confirmation'
            value={password_confirmation}
            onChange={this.handleChange}
          />

          <Form.Input
            // fluid label='password'
            fluid placeholder='gender'
            type='text'
            name='gender'
            value={gender}
            onChange={this.handleChange}
          />

            <Form.Input
            // fluid label='password'
            fluid placeholder='age'
            type='text'
            name='age'
            value={age}
            onChange={this.handleChange}
          />

            <Form.Input
            // fluid label='password'
            fluid placeholder='weight'
            type='text'
            name='weight'
            value={weight}
            onChange={this.handleChange}
          />

            <Form.Input
            // fluid label='password'
            fluid placeholder='height'
            type='text'
            name='height'
            value={height}
            onChange={this.handleChange}
          />
 

          <Button placeholder='submit' type='submit'>
            Sign Up
          </Button>

      </Segment>
        </Form>

        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}

export default Signup;