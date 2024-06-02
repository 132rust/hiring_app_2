import React from "react";
import "./NavBar.css";
import {useNavigate} from "react-router-dom";
import LogoIcon from "../../icons/logo.png";
import StartIcon from "../../icons/start.png";
import CreateTestIcon from "../../icons/test.png"
import EditTestIcon from "../../icons/edit_test.png"
import StatisticsIcon from "../../icons/statistics.png"
import ExitIcon from "../../icons/exit.png"


const NavBar = () => {

    const navigate = useNavigate()

    const handleStart = () =>{
        navigate('/start');
    };

    const handleCreatTest = () =>{
        navigate('/creatTest');
    };
    const handleEditTest = () =>{
        navigate('/editTest');
    };
    const handleStatistics = () =>{
        navigate('/statistics');
    };
    const handleExit = () =>{
        navigate('/');
    };

    return(
        <>

            <div className="nav_bar">
            <div className="nav_bar_header">
                <img src={LogoIcon} alt="Logo"/>
                <h1>esssault</h1>
            </div>
                <div className="nav_bar_buttons">
                    <div className="nav_bar_buttons_before">
                        <div className="nav_li">
                        <ul>
                            <li>
                                <button onClick={handleStart}><img src={StartIcon} alt={StartIcon}/>Начать тестирование
                                </button>
                            </li>
                            <li>
                                <button onClick={handleCreatTest}><img src={CreateTestIcon} alt={CreateTestIcon}/>Создать
                                    тест
                                </button>
                            </li>
                            <li>
                                <button onClick={handleEditTest}><img src={EditTestIcon} alt={EditTestIcon}/>Редактировать
                                    тест
                                </button>
                            </li>
                            <li>
                                <button onClick={handleStatistics}><img src={StatisticsIcon} alt={StatisticsIcon}/>Статистика
                                </button>
                            </li>
                        </ul>
                        </div>
                    <div className="nav_bar_exit">
                        <button onClick={handleExit}><img src={ExitIcon} alt={ExitIcon}/>Выйти</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default NavBar;
