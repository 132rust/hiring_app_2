import React from "react";
import "./CreateTest.css"
import NavBar from "../navBar/NavBar";

const CreateTest = () => {
    return(
        <div className="wrapper">
            <NavBar />
            <div className="container">
                <header>
                    <div className="label">
                    <p>Создать тест</p>
                    </div>
                    <div className="test_name">
                        <label>Название теста</label>
                        <input/>
                    </div>
                    <div className="container_btn">
                        <button className="btn">Создать</button>
                    </div>
                </header>
                <div className="container_inner">
                    <div className="test_number">
                        <h4>Тест №: 1</h4>
                    </div>
                    <div className="test">
                        <label>Вопрос</label>
                        <textarea/>
                        <label>Ответ</label>
                        <textarea/>
                        <div className="btn_add">
                            <button className="btn">Добавить</button>
                        </div>
                    </div>
                    <div className="delete_test">
                        <button>X</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default CreateTest;