import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./refactoredComponents/header/header";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./refactoredComponents/Home/firstPage";
import LoginForm from "./refactoredComponents/LoginForms/loginPage";
import HomePage from "./refactoredComponents/protectedRoutes/Homepage";
import PrivateRoute from "./PrivateRoute";
import AuthStatus from "./refactoredComponents/Context/authContext1";
import AdminHeader from "./refactoredComponents/adminDash/header";
import AdminBody from "./refactoredComponents/adminDash/body";

function App() {
  return (
    <div className="App">
      <AuthStatus>
        {" "}
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <FirstPage />
            </Route>
            <Route path="/login">
              <Header />
              <LoginForm />
            </Route>
            <PrivateRoute path="/admin">
              <AdminHeader />
              <AdminBody />
            </PrivateRoute>
            <PrivateRoute path="/home">
              <Header />
              <HomePage />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthStatus>
    </div>
  );
}

export default App;

// import FunctionContextTheme from "./Component/FunctionContextComponent";
// import ThemeProvider from "./Component/ThemeContext";
// import Test from "./Component/test";
// import AuthStatus from "./Component/authContext";
// import Body from "./Prabesh/Body";
// import Header from "./Component/header";
{
  /* <AuthStatus>
        <Header />
        <Body />
      </AuthStatus> */
}
{
  /* <ThemeProvider>
        <FunctionContextTheme />
      </ThemeProvider> */
}
