import React, { lazy, Suspense } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.scss';

const WelcomePage = lazy(() => import('../WelcomePage'));
const Board = lazy(()=>import('../Board'));

const LayoutContainer = () =>(
    <div className="LayoutContainer">
        <Router>
        <Suspense fallback={''}>
        <Switch>
          <Route exact path="/" render={() => <WelcomePage />} />
          <Route exact path="/board" render={() => <Board/>} />
        </Switch>
        </Suspense>
        </Router>      
    </div>
);

export default LayoutContainer;
