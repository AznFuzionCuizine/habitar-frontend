import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import AuthService from '../services/AuthService'

class Login extends Component {
  constructor(){
    super()
    this.auth = new AuthService()

    this.state = {
			loginSuccess: false,
			errors: "",
			user: {
				email: "",
				password: ""
			}
		}
  }

  onChange = (e) => {
		let { user } = this.state

		user[e.target.name] = e.target.value

		this.setState({ user })
	}

  onSubmit = (e) => {
		e.preventDefault()

		this.auth.login(this.state.user)
		.then(json => {
			console.log("handling any errors");
			if(json.errors) {
				this.setState({
					errors: json.errors
				})
			}
			return json
		})
		.then(json => {
			this.setState({
				loginSuccess: true
			})
		})
	}

  render() {

    let { email, password } = this.state.user

    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form onSubmit = {this.onSubmit}>
            <input
              className="form-item"
              placeholder="Email"
              name="email"
              type="text"
              onChange={this.onChange.bind(this)}
              value={email}
            />
            <input
              className="form-item"
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.onChange.bind(this)}
              value={password}
            />
            <input
              className="form-submit"
              onSubmit={this.onSubmit}
              value="SUBMIT"
              type="submit"
            />
          </form>
          {this.state.loginSuccess && <Redirect to="/dashboard" />}
        </div>
      </div>
    );
  }
}

export default Login;
