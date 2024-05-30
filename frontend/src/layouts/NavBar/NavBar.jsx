import React from "react";
import "./NavBar.css";
import LogoIcon from "../../icons/logo.png";
import StartIcon from "../../icons/start.png";
import CreateTestIcon from "../../icons/test.png"
import EditTestIcon from "../../icons/edit_test.png"
import StatisticsIcon from "../../icons/statistics.png"

const NavBar = () => {




    return(
        <>

            <div className="nav_bar">
            <div className="nav_bar_header">
                <img src={LogoIcon} alt="Logo"/>
                <h1>RRResault</h1>
            </div>
            <div className="nav_bar_buttons">
                <ul>
                    <li><button><img src={StartIcon} alt={StartIcon}/>Начать собеседование</button></li>
                    <li><button><img src={CreateTestIcon} alt={CreateTestIcon}/>Создать тест собеседования</button></li>
                    <li><button><img src={EditTestIcon} alt={EditTestIcon}/>Редоктировать тест</button></li>
                    <li><button><img src={StatisticsIcon} alt={StatisticsIcon}/>Статистика</button></li>
                </ul>
            </div>
            </div>
        </>
    )

};

export default NavBar;
