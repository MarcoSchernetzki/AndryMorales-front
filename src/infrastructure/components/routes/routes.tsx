import { Navigate, Route, Routes } from 'react-router-dom';
import { CreatePage } from '../../../feature/pages/create.page/create.page';
import { ServicePage } from '../../../feature/pages/service.page/service.page';
import { HomePage } from '../../../feature/pages/home.page/home.page';
import { LoginPage } from '../../../feature/pages/login.page/login.page';
import { RegisterPage } from '../../../feature/pages/registerPage/register.page';
import { AppointmentPage } from '../../../feature/pages/appointment.page/appointment.page';
import DetailsPage from '../../../feature/pages/details.page/details.page';
import React from 'react';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="services" element={<ServicePage />}></Route>
            <Route path="create" element={<CreatePage />}></Route>
            <Route path="appointment" element={<AppointmentPage />}></Route>
            <Route path="details" element={<DetailsPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="" element={<HomePage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
};
