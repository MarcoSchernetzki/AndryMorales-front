import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EventApi, DateSelectArg, EventClickArg } from '@fullcalendar/core';

import { rootState } from '../../../infrastructure/store/store';
import { ProductRepository } from '../service/product.repository';
import * as ac from '../reducer/action.creator';
import { DemoAppState, ProductI } from '../model/product';
import {
    addProductActionUser,
    updateProductActionUser,
    deleteProductActionUser,
} from '../../users/reducer/action.creators';
import { useNavigate } from 'react-router-dom';
import { createEventId } from '../utils/event-utils';

export const useAppointments = () => {
    const [state, setState] = useState({
        weekendsVisible: true,
        currentEvents: [],
    } as DemoAppState);
    const navigate = useNavigate();
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProduct = useMemo(() => new ProductRepository(), []);

    const handleLoad = useCallback(
        () =>
            apiProduct
                .getAllProducts()
                .then((products) =>
                    dispatcher(ac.loadActionCreator(products.products))
                )
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                ),
        [apiProduct, dispatcher]
    );

    const handleAdd = (newProduct: ProductI, token: string) => {
        apiProduct
            .create(newProduct, token)
            .then((product) => {
                dispatcher(ac.addActionCreator(product.products));
                dispatcher(addProductActionUser(product.products));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (
        id: string,
        updateProduct: Partial<ProductI>,
        token: string
    ) => {
        apiProduct
            .update(id, updateProduct, token)
            .then((product: ProductI) => {
                dispatcher(ac.updateActionCreator(product));
                dispatcher(updateProductActionUser(product));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: string, token: string) => {
        apiProduct
            .delete(id, token)
            .then((dataId) => {
                dispatcher(ac.deleteActionCreator(dataId));
                dispatcher(deleteProductActionUser(dataId));
                navigate('/home');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleSelect = (product: ProductI) => {
        apiProduct
            .getProduct(product.id as string)
            .then(() => {
                dispatcher(ac.selectActionCreator(product));
                navigate('/details');
            })
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleWeekendsToggle = () => {
        setState({
            weekendsVisible: !state.weekendsVisible,
            currentEvents: state.currentEvents,
        });
    };

    const handleDateSelect = (selectInfo: DateSelectArg, duration: string) => {
        const startService = new Date(selectInfo.startStr);

        const appointmentTime = getConfigAppoint(startService, duration);

        const title = 'nueva cita';
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: appointmentTime,
                allDay: selectInfo.allDay,
            });
        }
    };

    const handleEventClick = (clickInfo: EventClickArg) => {
        if (
            confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    };

    const handleEvents = (events: EventApi[]) => {
        setState({
            weekendsVisible: state.weekendsVisible,
            currentEvents: events,
        });
    };

    const getConfigAppoint = (startService: Date, duration: string) => {
        console.log(duration);

        switch (duration) {
            case '30 min':
                return startService.setHours(
                    startService.getHours() + 0,
                    startService.getHours() + 20
                );

            case '1:00':
                return startService.setHours(startService.getHours() + 1);

            case '1:30 hs':
                return startService.setHours(
                    startService.getHours() + 1,
                    startService.getHours() + 20
                );

            case '3:00 hs':
                return startService.setHours(startService.getHours() + 3);

            case '3:30 hs':
                return startService.setHours(
                    startService.getHours() + 3,
                    startService.getHours() + 20
                );

            default:
                return startService.setHours(
                    startService.getHours() + 0,
                    startService.getHours() + 20
                );
        }
    };

    return {
        products,
        state,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleSelect,
        handleLoad,
        handleDateSelect,
        handleEventClick,
        handleEvents,
        handleWeekendsToggle,
    };
};
