import React from "react";
import {WithRequired} from "../common/utils";
import {MainLayout} from "../common/layouts/MainLayout/MainLayout";
import {MAIN_ROUTE, PAGE_404_ROUTE, TODOS_ROUTE} from "./routes";
import {MainPage} from "../pages/Main/MainPage";
import {Todo} from "../pages/Todo/Todo/Todo";
import {Page_404} from "../common/pages/Page_404/Page_404";
import {RouteProps} from "react-router-dom";

export type IRouteProps = WithRequired<RouteProps, 'component'> & {
  title?: string;
  layout: React.FC;
};

export const allRoutes: IRouteProps[] = [
  {
    path: MAIN_ROUTE,
    component: MainPage,
    exact: true,
    layout: MainLayout
  },
  {
    path: TODOS_ROUTE,
    component: Todo,
    exact: true,
    layout: MainLayout
  },
  {
    path: PAGE_404_ROUTE,
    exact: true,
    layout: Page_404,
    component: () => <></>
  }
]