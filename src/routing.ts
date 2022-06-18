import React, { LazyExoticComponent } from 'react';

const LoginPage = React.lazy(() =>
    import('./pages/Login').then((module) => ({
        default: module.Login,
    }))
);

interface PageRouting {
    title: string;
    path: string;
    component: LazyExoticComponent<any>;
}

const PageNotFoundRouting: PageRouting = {
    title: 'Page Not Found',
    path: '*',
    component: LoginPage,
};

export const Routing: PageRouting[] = [
    {
        title: 'Default Page',
        path: '/',
        component: LoginPage,
    },
    PageNotFoundRouting,
];
