import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexComponent from "./component/index"; // Import your index.jsx file

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/index" component={IndexComponent} />
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
