import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/registerForm/register.form';

export const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <main className="container-login">
            <h1>Registro</h1>
            <RegisterForm />
            <div className="div">
                <div
                    onClick={() => navigate('/login', { replace: true })}
                    className="link"
                >
                    ¿Tienes cuenta? Identifícate
                </div>
            </div>
        </main>
    );
};
