import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import Contact from '../pages/Contact'
import Private from '../pages/Privateprojects'

const Main = () => (
<Switch>
    <Route exact path="/Portfolio-2.0/" component ={Home} />
    <Route path="/Portfolio-2.0/resume" component ={Resume} />
    <Route path="/Portfolio-2.0/contact" component ={Contact} />
    <Route path="/Portfolio-2.0/projects" component ={Private} />
</Switch>
    
)

export default Main;