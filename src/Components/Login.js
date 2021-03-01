import React from "react";
import "./style.css";
import { Header, Message } from "semantic-ui-react";
import { Switch, Link, Route } from "react-router-dom";
import Register from "./Register";

class Login extends React.Component {
  state = { email: "", password: "" };
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
              Login
            </Header>
            <div className="ui fluid card">
              <div className="content">
                <form
                  className="ui form"
                  method="POST"
                  onSubmit={this.onSubmit}
                >
                  <div className="field">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="User name"
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
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="lock alternate icon"></i>
                    Login
                  </button>
                </form>
              </div>
            </div>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </div>
        </div>
        <Switch>
          <Route path="/signup" Component={Register}></Route>
        </Switch>
      </div>
    );
  }
}

export default Login;
