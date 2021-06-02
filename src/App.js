import React from "react";
import Header from "./component/Header";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import PrivatePage from "./pages/PrivatePage";
import ForgetPassword from "./pages/ForgetPassword";
import AccountActive from "./pages/AccountActive";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/registration" component={Registration} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
          <Route exact path="/userinfo" component={PrivatePage} /> */}
          {/* <Route
            exact
            path="/account/activate/:token"
            component={AccountActive}
          /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
