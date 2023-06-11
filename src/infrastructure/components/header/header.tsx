import { useNavigate, Link } from 'react-router-dom';
import { useUsers } from '../../../feature/users/hook/use.users';
import './header.css';

export const Header = () => {
    const navigate = useNavigate();
    const { users, handleLogout } = useUsers();
    return (
        <header>
            <div className="container-header">
                {users.user ? (
                    <>
                        {' '}
                        <h2>Cuenta de {users.user.name}</h2>{' '}
                        <button
                            className="button"
                            onClick={(e) => {
                                e.preventDefault();
                                handleLogout();
                                navigate('/login');
                            }}
                        >
                            Salir
                        </button>{' '}
                    </>
                ) : (
                    <div className="header-bar">
                        <Link to={'./'} className="link">
                            <img
                                src="../../../../assets/logo-andry-gota.svg"
                                alt="Andry Morales logo"
                                width="40px"
                            />
                        </Link>

                        <Link to={'./login'} className="link">
                            <img
                                src="../../../../assets/person-add.svg"
                                alt="iniciar sesion"
                                width="30px"
                            />
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};
