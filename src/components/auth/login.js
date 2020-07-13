  
import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

        <form onSubmit={this.handleSubmit}>
          <input
           type="email"
           name="email"
           placeholder="Your email"
           value={this.state.email}
           onChange={this.handleSubmit}
            />

            <input
           type="password"
           name="password"
           placeholder="Your password"
           value={this.state.password}
           onChange={this.handleSubmit}
            />

            <div>
              <button type="submit">Log In</button>
            </div>
        </form>
      </div>
    );
  }
}