import { useEffect } from 'react';
import { useUsers } from '../../users/hook/use.users';
import { useAppointments } from '../../wishes/hook/use.appointments';
import { ProductI } from '../../wishes/model/product';
import { ProductItem } from '../product.item/product.item';
import './appointment.list.css';

export const AppointmentList = () => {
    const { users } = useUsers();
    const { handleLoad } = useAppointments();
    useEffect(() => {
        handleLoad();
    }, [handleLoad, users]);

    if (!users) return <p>loading...</p>;
    return (
        <>
            {users.user && users.user.myAppointments?.length > 0 ? (
                <ul className="productlist">
                    {users.user?.myAppointments.map((item: ProductI) => (
                        <li key={item.id}>
                            <ProductItem item={item}></ProductItem>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="productlist-empty">Actualmente no tienes citas</p>
            )}
        </>
    );
};
