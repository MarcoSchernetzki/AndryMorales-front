import CreateForm from '../../components/create.form/create.form';
import React from 'react';

export const CreatePage = () => {
    return (
        <>
            <main>
                <h2>Pide tu cita</h2>
                <div>
                    <CreateForm />
                </div>
            </main>
        </>
    );
};
