import { ProductI } from '../../wishes/model/product';
import { useAppointments } from '../../wishes/hook/use.appointments';
import './product.item.css';
import React from 'react';

export const ProductItem = ({ item }: { item: ProductI }) => {
    const { handleSelect } = useAppointments();

    return (
        <>
            <div className="container-service-item">
                <img
                    className="service-image"
                    src={item.image}
                    alt={item.name}
                    width="150px"
                    height="auto"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSelect(item);
                    }}
                />
                <p className="service-name">{item.name}</p>
                <p className="service-duration">Duracion: {item.duration}</p>
                <p className="service-price">€ {item.price},00</p>
            </div>
        </>
    );
};
