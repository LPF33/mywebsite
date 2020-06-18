import React from "react";
import {Route} from "react-router-dom";
import "./Articles.css";
import Git from "./articles/Git";
import Bash from "./articles/Bash";

export default function Articles(){
    return(
        <div>
            <Route 
                exact path = "/articles/git"
                component = {Git}
            /> 
            <Route 
                exact path = "/articles/bash"
                component = {Bash}
            />          
        </div>        
    )
}