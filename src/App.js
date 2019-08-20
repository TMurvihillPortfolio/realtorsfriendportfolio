import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ManageHome from './components/ManageHome';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Route>
    <Switch>
        <Route exact path='/' render={(routeProps) => <ManageHome {...routeProps} />}/>       
        <Route exact path='/realtorsfriend' render={(routeProps) => <ManageHome {...routeProps} />}/>       
        <Route exact path='/realtorsfriend/home' render={(routeProps) => <ManageHome {...routeProps} />}/>
        <Route exact path='/realtorsfriend/about' render={(routeProps) => <About {...routeProps}/>}/>       
        <Route exact path='/realtorsfriend/contact' render={(routeProps) => <Contact {...routeProps}/>}/>
    </Switch>               
</Route>
  );
}

export default App;
