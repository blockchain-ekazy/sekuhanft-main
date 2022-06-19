import Home from "./Components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import Collection from "./Components/Collection";

function App() {
  return (
    <div>
      {/* <Home /> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mint" component={Collection} />
          {/* <Route exact path="/live" component={live}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
