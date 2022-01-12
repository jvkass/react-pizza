import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

const MakePizza = lazy(() => import("../pages/MakePizza"));

export const Routes: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={() => <MakePizza />} path="/MakePizza" />
        <Route component={() => <Redirect to="/" />} path="*" />
      </Switch>
    </Suspense>
  );
};
