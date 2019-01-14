import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="about" id="about">
        <div className="aboutMe">
           Здравствуйте! Меня зовут Зайцева Лидия. Я начинающий WEB developer.<br/>
            По данной специальности закончила курсы в центре "Level UP" в 2018 году.<br/>
            В настоящее время также учусь на факультете "Бизнес-информатика" в СПбГТИ.<br/>
            Имею навыки работы с HTML, CSS, JS, React & Redux, Node.js и MongoDB.<br/>
            Работала в команде разработчиков с помощью Trello и Git.<br/>
            Имею опыт работы с графическими программами.
        </div>
        <div className="shadow"></div>
    </div> 
    );
  }
}

export default About;