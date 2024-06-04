import React, { useState } from "react";
import "./SignIn.css";
import LogoIcon from "../../../icons/logo.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/startTest');
    };

    const handleSignUp = () => {
        navigate('/signUp');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию
        fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Ошибка авторизации');
            })
            .then(data => {

                navigate('/startTest');
            })
            .catch(error => {
                console.error('Ошибка:', error);
            });
    };

    return (
        <div className="wrapper_auth">
            <div className="container_auth">
                <div className="form_heading">
                    <span><img src={LogoIcon} alt="Logo" />ESSSAULT</span>
                    <button onClick={handleSignUp} className="signup-button">Регистрация</button>
                </div>
                <div className="heading">Авторизация</div>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        required
                        className="input"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                    <input
                        required
                        className="input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Пароль"
                    />
                    <button className="login-button" type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
