import { useEffect } from 'react';
import { useAppointments } from '../../wishes/hook/use.appointments';
import { ProductI } from '../../wishes/model/product';
import { ProductItem } from '../product.item/product.item';
import './services.list.css';
import { data } from '../../../infrastructure/data/data';
import React from 'react';

export const ServicesList = () => {
    const { handleLoad } = useAppointments();
    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <span className="tittle-bottom" />
            <h2 className="services-tittle">Nuestros Servicios</h2>
            <ul className="services-list">
                {data.map((item: ProductI) => (
                    <li key={item.id}>
                        <ProductItem item={item}></ProductItem>
                    </li>
                ))}
            </ul>
        </>
    );
};
