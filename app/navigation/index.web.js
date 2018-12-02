
import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";


import  Login  from '../pages/login';
import  Welcome  from '../pages/welcome';

 

export function Routing() {
    return ( 
            <Router>
                <div>
                    <Route path="/" exact component={Login} />
                    <Route path="/welcome" exact component={Welcome} />
                    <Route path="/login" exact component={Login} />
                </div>
            </Router> 
    );
}
