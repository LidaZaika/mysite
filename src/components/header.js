import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
        <header>
        <div className="back">
        </div>
        <div><h1>WEB developer
       </h1>
        </div>
        <div className="menuAll" id="menu">
           <div className="menu">
              <a href="#about">Обо мне</a> 
           </div>
           <div className="menu">
               <a href="#myprojects">Мои проекты</a>
           </div>
           <div className="menu">
              <a href="#footer">Контакты</a> 
           </div>  
        </div>
    </header>
    );
  }
}

export default header;