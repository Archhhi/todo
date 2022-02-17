import React from 'react';
import {allRoutes} from "./router";
import {RouteWrapper} from "./common/router/RouteWrapper";
import {Switch} from "react-router-dom";

export const App: React.FC = () => {
  const routes = allRoutes;

  return (
    <div className="App">
      <Switch>
        {routes.map((route, i) => (
          <RouteWrapper {...route} key={i}/>
        ))}
      </Switch>
    </div>
  );
}
