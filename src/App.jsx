import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { Typography } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Typography variant="h1">DHL</Typography>
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  );
}

export default App;
