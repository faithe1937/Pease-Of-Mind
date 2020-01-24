import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import SearchContainer from "./components/search/SearchContainer";
import FavContainer from "./components/favorite/FavContainer";
import Login from "./components/registrations/Login";
import Signup from "./components/registrations/Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }
  componentDidMount() {
    this.loginStatus();
  }
  loginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          console.log(response);
          this.handleLogin(response.data);
        } else {
          this.handleLogout();
        }
      })
      .catch(error => console.log("api errors:", error));
  };
  handleLogin = data => {
    this.setState(
      {
        isLoggedIn: true,
        user: data.user
      },
      () => console.log(data.user)
    );
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  };
  render() {
    return (
      <div>
        <Router>
        <Header
                  // {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
                />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/profile" component={FavContainer}>
              <FavContainer user={this.state.user} />
            </Route>

            {/* <Route
              exact
              path="/header"
              render={props => (
                <Header
                  {...props}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            /> */}
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
