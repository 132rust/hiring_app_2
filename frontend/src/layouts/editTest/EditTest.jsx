import React from "react";
import "./EditTest.css"
import NavBar from "../navBar/NavBar";

const EditTest = () => {
    return(
        <div className="wrapper">
            <NavBar/>
            <div className="container">
                <header>
                    <div className="label">
                    <p>Редактировать тест</p>
                    </div>
                    <div className="test_name">
                        <label>Название теста</label>
                        <input/>
                    </div>
                    <div className="container_btn">
                        <button className="btn">Сохранить</button>
                    </div>
                </header>
                <div className="container_inner">
                    <div className="test_number">
                        <label>Тест №: 1</label>
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
}

export default EditTest;