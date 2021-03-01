import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Link, Switch, Route } from "react-router-dom";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="ui segment">
          <div className="ui menu">
            <div className="item">
              <div className="ui button">
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
            <div className="item">
              <div className="ui button">
                <Link to="/login">Log-in</Link>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" component={Login} exact></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Register}></Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    );
  }
}

function NoMatch() {
  return <h1>Page not found!!</h1>;
}
export default Home;
