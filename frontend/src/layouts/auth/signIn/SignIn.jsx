import React from "react";
import "./SignIn.css"
import LogoIcon from "../../../icons/logo.png"
import {useNavigate} from "react-router-dom";


const SignIn = () => {

    const navigate = useNavigate();

    const handleSignIn = () =>{
        navigate('/start');
    };

    const handleSignUp = () => {
        navigate('/signUp');
    }


    return(

        <div className="wrapper">
            <div className="wrapper_before">
                <div className="container_form">
                    <div className="form_header">
                       <label><img src={LogoIcon} alt="LogoIcon"/><p>esssault</p></label>
                        <button onClick={handleSignUp}>Регистрация</button>
                    </div>
                    <form>
                        <label>Авторизация</label>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Пароль"/>
                        <button onClick={handleSignIn}>Войти</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default SignIn;