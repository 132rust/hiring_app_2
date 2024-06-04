import React from 'react';
import "./StartTest.css"
import NavBar from "../navBar/NavBar";


const StartTest = () => {
    return(

        <div className="wrapper">
            <NavBar/>
            <div className="container">
                <header>
                    <div className="label">
                        <p>Тестирование</p>
                    </div>
                    <div className="test_name">
                        <label>url:local....</label>
                    </div>
                    <div className="container_btn">
                        <button>Следующий вопрос</button>
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
};

export default StartTest;