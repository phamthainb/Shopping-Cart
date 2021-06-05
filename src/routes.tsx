import React from "react";
import { Component } from "react";
import { JsxElement } from "typescript";
import PageCart from "./pages/PageCart";
import PageProduct from "./pages/PageProduct";

interface Route {
    path: string,
    exact: boolean,
    // main: () => Component,
}

const routes: Route[] = [
    {
        path: '/',
        exact: true,
        // main: () => <PageProduct/>
    },
    {
        path: '/cart',
        exact: true,
        // main: () => <PageCart/>
    },

]

export default routes