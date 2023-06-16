import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import React from 'react';

export const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
};
