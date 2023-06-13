import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/routes';
import React from 'react';

export const App = () => {
    return (
        <Layout>
            <AppRoutes />
        </Layout>
    );
};
