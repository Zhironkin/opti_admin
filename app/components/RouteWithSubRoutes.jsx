import React from 'react';
import {Route} from 'react-router-dom';

export const RouteWithSubRoutes = (route) => (
	// console.log('route', route),
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
        <route.component {...props} {...(route.props || {})} routes={route.routes}/>
    )}
  />
);
