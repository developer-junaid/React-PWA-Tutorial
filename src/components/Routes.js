import React from "react"
import { Switch, Route } from "react-router-dom"
import Users from "./Users"
import About from "./About"
import Home from "./Home"

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/users" exact={true} component={Users} />
    </Switch>
  )
}

export default Routes
