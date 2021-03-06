import React from "react";
import {BrowserRouter, Route, Switch,  NavLink} from 'react-router-dom';
import NoPageFound from '../components/NoPageFound';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header'





const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit/:id' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
      <Route  component={NoPageFound} />
      </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;
