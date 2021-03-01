import React from "react";
import "./style.css";
import { Header, Message } from "semantic-ui-react";
import Login from "./Login";
import { Link, Switch, Route } from "react-router-dom";

class Register extends React.Component {
  state = { name: "", email: "", password: "", confirmPassword: "" };
  onSubmit(event) {
    event.preventDefault();
    console.log("*********", this);
    // custom form handling here
  }
  render() {
    return (
      <div className="page-login">
        <div className="ui centered grid container">
          <div className="nine wide column">
            <Header as="h2" color="blue" textAlign="center">
              SignUp
            </Header>
            {/* <label className="content">SignUp</label> */}
            <div className="ui fluid card">
              <div className="content">
                <form
                  className="ui form"
                  method="POST"
                  onSubmit={this.onSubmit}
                >
                  <div className="field">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email ID"
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Re-enter password"
                      onChange={(e) =>
                        this.setState({ confirmPassword: e.target.value })
                      }
                    />
                  </div>
                  <button className="ui primary button" type="submit">
                    Register
                  </button>
                </form>
              </div>
            </div>
            <Message>
              Already have an account? <Link to="/login">Login here</Link>
            </Message>
          </div>
        </div>
        <Switch>
          <Route path="/login" Component={Login}></Route>
        </Switch>
      </div>
    );
  }
}

export default Register;
