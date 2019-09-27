import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import PageI from './Page1';
import PageII from './Page2';
const Container = props =>{
    return (
        <Switch>
             <Route exact path="/page-1" name="Page I" component={PageI}/>
             <Route exact path="/page-2" name="Page II" component={PageII}/>
             <Redirect from="**" to="/page-1"/>
        </Switch>
    )
}

export default Container;