import React from "react";
import "./SignUp.css"
import LogoIcon from "../../../icons/logo.png";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const handleSignIn = () =>{
        navigate('/');
    };



    return (
        <div className="wrapper">
            <div className="wrapper_before">
                <div className="container_form">
                    <div className="form_header">
                        <label><img src={LogoIcon} alt="LogoIcon"/><p>esssault</p></label>
                        <button onClick={handleSignIn}>Авторизация</button>
                    </div>
                    <form>
                        <label>Регистрация</label>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Введите Ваш пароль"/>
                        <input type="password" placeholder="Подтвердите Ваш пароль"/>
                        <input type="text" placeholder="Введите название Вашей компании"/>
                        <button onClick={handleSignIn}>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;