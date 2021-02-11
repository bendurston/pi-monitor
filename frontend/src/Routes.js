import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home.js"
import GetData from "./pages/GetData.js"

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/getdata">
                    <GetData />
                </Route>
            </Switch>
        </Router>
    )

}