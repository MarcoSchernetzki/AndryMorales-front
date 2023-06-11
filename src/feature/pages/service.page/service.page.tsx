import { useNavigate } from 'react-router-dom';
import { AppointmentList } from '../../components/appointment.list/appointment.list';
import './service.page.css';
import { useUsers } from '../../users/hook/use.users';

export const ServicePage = () => {
    const { users } = useUsers();
    const navigate = useNavigate();

    return (
        <>
            <main>
                {users.user && users.user.role === 'admin' ? (
                    <>
                        <div className="buttons">
                            <button
                                className="buttonAdd"
                                onClick={() => {
                                    navigate('/create');
                                }}
                            >
                                Añade un servicio
                            </button>
                            <button
                                className="buttonInspo"
                                onClick={() => {
                                    navigate('/inspo');
                                }}
                            >
                                Modificar un servicio
                            </button>
                        </div>
                        <h1 className="titulo">Tu lista de citas</h1>
                        <div>
                            <AppointmentList />
                        </div>
                    </>
                ) : (
                    ''
                )}
            </main>
        </>
    );
};
