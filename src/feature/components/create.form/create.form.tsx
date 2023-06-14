import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../users/hook/use.users';
import { useAppointments } from '../../wishes/hook/use.appointments';
import { ProductI } from '../../wishes/model/product';
import '../../pages/service.page/service.page.css';
import React from 'react';

export const CreateForm = () => {
    const navigate = useNavigate();

    const { users } = useUsers();
    const { handleAdd } = useAppointments();
    const [addFormState, setAddFormState] = useState({
        name: '',
        image: '',
        price: 0,
        description: '',
        category: '',
        area: '',
        duration: '',
        isAvailable: true,
        clients: [],
    });

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setAddFormState({
            ...addFormState,
            [element.name]: element.value,
        });
    };

    const handleAddSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(addFormState as ProductI, users.token as string);
    };

    return (
        <div>
            <form onSubmit={handleAddSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Nombre"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Imagen (url)"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="origin"
                        placeholder="¿Dónde conseguirlo? (url)"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="origin"
                        placeholder="¿Dónde conseguirlo? (url)"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Precio (€)"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="comments"
                        placeholder="Descripcion"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <button className="buttonAdd" type="submit">
                        Guardar
                    </button>
                    <button
                        className="buttonInspo"
                        onClick={() => {
                            navigate('/home', { replace: true });
                        }}
                    >
                        Cancelar
                    </button>
                </label>
            </form>
        </div>
    );
};

export default CreateForm;
