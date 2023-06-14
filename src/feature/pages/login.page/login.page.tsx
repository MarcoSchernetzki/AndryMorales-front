import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/login.form/login.form';
import './login.page.css';

export const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <main className="container-login">
                <h1>Acceso</h1>
                <LoginForm />
                <div
                    onClick={() => navigate('/register', { replace: true })}
                    className="link"
                >
                    Crear cuenta
                </div>
            </main>
        </>
    );
};
