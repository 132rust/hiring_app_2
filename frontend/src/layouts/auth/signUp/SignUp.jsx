import React, {useEffect, useState} from "react";
import "./SignUp.css"
import LogoIcon from "../../../icons/logo.png";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const handleSignIn = () =>{
        navigate('/login');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [company_name, setCompanyName] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
    const [companyNameDirty, setCompanyNameDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [confirmPasswordError, setConfirmPasswordError] = useState('Пароли не совпадают');
    const [companyNameError, setCompanyNameError] = useState('Строка не должна быть пуста');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError || confirmPasswordError || companyNameError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, confirmPasswordError, companyNameError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        const password = e.target.value;
        if (password.length < 8 || password.length > 24) {
            setPasswordError('Пароль должен быть длиннее 8 и меньше 24 символов');
        } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            setPasswordError('Пароль должен содержать хотя бы одну прописную и одну строчную букву ');
        } else {
            setPasswordError('');
        }
    };

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmPasswordError('Пароли не совпадают');
        } else {
            setConfirmPasswordError('');
        }
    };

    const companyNameHandler = (e) => {
        setCompanyName(e.target.value);
        if (!e.target.value.trim()) {
            setCompanyNameError('Название компании не может быть пустым');
        } else {
            setCompanyNameError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'confirmPassword':
                setConfirmPasswordDirty(true);
                break;
            case 'company_name':
                setCompanyNameDirty(true);
                break;
            default:
                break;
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formValid) return;

        try {
            const response = await fetch('http://127.0.0.1:8000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, company_name}),
            });

            if (response.ok) {
                const data = await response.json();

                console.log('Registration successful:', data);
                navigate('/login');
            } else {
                if (response.status === 400 || response.status === 500) {
                    setEmailError('Этот email уже существует');
                } else {
                    const errorData = await response.json();
                    if (errorData.error) {
                        setEmailError(errorData.error);
                    } else {
                        setEmailError('Такой Email уже существует');
                    }
                }
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setEmailError('Такой Email уже существует');
        }
    };

    return (
        <div className="wrapper">
            <div className="wrapper_before">
                <div className="container_form">
                    <div className="form_header">
                        <label><img src={LogoIcon} alt="LogoIcon"/><p>esssault</p></label>
                        <button onClick={handleSignIn}>Авторизация</button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>Регистрация</label>
                        <input  onBlur={blurHandler} onChange={emailHandler} type="email" name="email" value={email} placeholder="Email"/>
                        {emailDirty && emailError && (
                            <div>{emailError}</div>
                        )}
                        <input  onBlur={blurHandler} onChange={passwordHandler} type="password" name="password" value={password} placeholder="Введите Ваш пароль"/>
                        {passwordDirty && passwordError && (
                            <div>{passwordError}</div>
                        )}
                        <input  onBlur={blurHandler} onChange={confirmPasswordHandler} type="password" name="confirmPassword" value={confirmPassword} placeholder="Подтвердите Ваш пароль"/>
                        {confirmPasswordDirty && confirmPasswordError && (
                            <div>{confirmPasswordError}</div>
                        )}
                        <input  onBlur={blurHandler} onChange={companyNameHandler} type="text" name="company_name" value={company_name} placeholder="Введите название Вашей компании"/>
                        {companyNameDirty && companyNameError && (
                            <div>{companyNameError}</div>
                        )}
                        <button disabled={!formValid}>Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;