import React from "react";
import "./SignIn.css"
import LogoIcon from "../../../icons/logo.png"
import {useNavigate} from "react-router-dom";


const SignIn = () => {

    const navigate = useNavigate();

    const handleSignIn = () =>{
        navigate('/startTest');
    };

    const handleSignUp = () => {
        navigate('/signUp');
    }


    return(
        <div className="wrapper">
        <div className="container">
            <span><img src={LogoIcon} alt={LogoIcon}/>ESSSAULT</span>
            <div className="heading">Авторизация</div>
            <form action="" className="form">
                <input required="" className="input" type="email" name="email" id="email" placeholder="E-mail"/>
                    <input required="" className="input" type="password" name="password" id="password" placeholder="Пароль"/>
                <button className="login-button" type="submit" value="Войти">Войти</button>

            </form>
        </div>
        </div>
    )

}

export default SignIn;