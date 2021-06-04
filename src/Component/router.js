import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 122);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 122);
  },
};

const Public = () => <h3>Public Route</h3>;
const Protected = () => <h3>Protected Route</h3>;
const Protected1 = () => <h3>secret key is 9845088172</h3>;

function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };
  const logout = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(false);
    });
  };

  if (redirectToReferrer === true) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <button onClick={login}>Log In</button>
      <p>you must be autheticated to access protected route </p>{" "}
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return fakeAuth.isAuthenticated === true ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/protected1">get secret key</Link>
          </li>
        </ul>

        <Route path="/public">
          <Public />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/protected">
          <Protected />
        </PrivateRoute>
        <PrivateRoute path="/protected1">
          <Protected1 />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
